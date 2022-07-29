import axios, { AxiosRequestConfig } from 'axios';
import { env } from 'process';

const $host = axios.create({
  baseURL: env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: env.REACT_APP_API_URL,
});

const authInterceptor = (config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
