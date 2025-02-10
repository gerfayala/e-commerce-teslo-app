import {SecureStorageAdapter} from '@/helpers/adapters/secure-storage.adapter';
import {A} from '@expo/html-elements';
import axios from 'axios';
import {Platform} from 'react-native';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const apiUrlIos = process.env.EXPO_PUBLIC_API_URL_IOS;

const apiUrlAndroid = process.env.EXPO_PUBLIC_API_URL_ANDROID;

const apiWeb = process.env.EXPO_PUBLIC_API_URL_WEB;

const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev';

export const API_URL =
  STAGE === 'prod'
    ? apiUrl
    : Platform.OS === 'ios'
    ? apiUrlIos
    : Platform.OS === 'android'
    ? apiUrlAndroid
    : Platform.OS === 'web'
    ? apiWeb
    : apiUrl;

const productsApi = axios.create({
  baseURL: API_URL
});

productsApi.interceptors.request.use(async (config) => {
  //Verify if we have token on secure storage

  const token = await SecureStorageAdapter.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export {productsApi};
