import axios, { AxiosError, AxiosInstance } from 'axios';

export class HttpService {
    public instance: AxiosInstance;

    constructor(token: string) {
        this.instance = axios.create({
            baseURL: 'https://api.abacatepay.com/v1',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
    }

    isError(error: any) {
        const axiosError = error as AxiosError
        console.dir(axiosError)
        const message = axiosError.response?.data as { error: string };
        throw new Error(message.error);
    }
}
