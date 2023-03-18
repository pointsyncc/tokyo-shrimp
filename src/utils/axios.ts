import { Request } from './sendRequest';
import Router from 'next/router';
export const pointSynccAPI = new Request(process.env.NEXT_PUBLIC_API_URL!);

pointSynccAPI.axiosInstance.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = Router.locale ?? 'en';
  return config;
});
