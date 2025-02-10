import {User} from '@/core/auth/interface/usert';

export interface Products {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: Size[];
  gender: Gender;
  tags: string[];
  images: string[];
  user: User;
}

export enum Gender {
  Kid = 'kid',
  Men = 'men',
  Women = 'women'
}

export enum Size {
  Xs = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  Xl = 'XL',
  Xxl = 'XXL',
  Xxxl = 'XXXL'
}
