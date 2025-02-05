import {authCheckStatus, authLogin} from '@/core/auth/actions/auth.actions';
import {User} from '@/core/auth/interface/usert';

import {create} from 'zustand';
export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;

  changeStatus: (token?: string, user?: User) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  //Properties
  status: 'checking',
  token: undefined,
  user: undefined,

  changeStatus: async (token?: string, user?: User) => {
    if (!token || !user) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      // await SecureStorageAdapter.deleteItem('token');
      return false;
    }

    set({
      status: 'authenticated',
      token: token,
      user: user
    });

    // await SecureStorageAdapter.setItem('token', token);

    return true;
  },

  //Actions
  login: async (email: string, password: string) => {
    const response = await authLogin(email, password);

    return get().changeStatus(response?.token, response?.user);
  },

  checkStatus: async () => {
    const response = await authCheckStatus();

    get().changeStatus(response?.token, response?.user);
  },

  logout: async () => {
    set({status: 'unauthenticated', token: undefined, user: undefined});
  }
}));
