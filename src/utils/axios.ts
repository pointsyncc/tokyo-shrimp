import { Request } from './sendRequest';

export const pointSynccAPI = new Request(process.env.NEXT_PUBLIC_API_URL!);
