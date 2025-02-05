import axios from 'axios';
import {Platform} from 'react-native';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const apiUrlIos = process.env.EXPO_PUBLIC_API_URL_IOS;

const apiUrlAndroid = process.env.EXPO_PUBLIC_API_URL_ANDROID;

const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev';

export const API_URL =
  STAGE === 'prod'
    ? apiUrl
    : Platform.OS === 'ios'
    ? apiUrlIos
    : Platform.OS === 'android'
    ? apiUrlAndroid
    : apiUrl;

console.log({STAGE, [Platform.OS]: API_URL});

const productsApi = axios.create({
  baseURL: API_URL
});

export {productsApi};
