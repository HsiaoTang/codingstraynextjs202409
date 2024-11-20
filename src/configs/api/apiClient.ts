import { getItemFromLocalStorage } from '@/src/utils/helpers';
import axios, { AxiosDefaults, AxiosInstance, AxiosRequestConfig } from 'axios';

const defaultAxiosRequestConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
} 

const axiosInstance: AxiosInstance = axios.create(defaultAxiosRequestConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItemFromLocalStorage<string>('token', '');
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    
  }
);