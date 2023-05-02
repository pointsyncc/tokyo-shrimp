import { Request } from './sendRequest';
import Router from 'next/router';
export const POINTSYNCC_API = new Request(process.env.NEXT_PUBLIC_API_URL!);

POINTSYNCC_API.axiosInstance.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = Router.locale ?? 'en';
  return config;
});
