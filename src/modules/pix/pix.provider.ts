import { HttpService } from '../../api/httpService';
import { IPixPayment, IPixPaymentResponse, IPixPaymentStatusResponse } from './pix.interface';

export class PixProvider {
    private http: HttpService;

    constructor(token: string) {
        this.http = new HttpService(token);
    }

    public create = async (pay: IPixPayment) => {
        try {
            const { data } = await this.http.instance.post<IPixPaymentResponse>('/pixQrCode/create', pay);
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };

    public simulatePayment = async (id: string) => {
        try {
            const { data } = await this.http.instance.post<IPixPaymentResponse>(
                `/pixQrCode/simulate-payment?id=${id}`,
                { metadata: {} },
            );
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };

    public checkStatus = async (id: string) => {
        try {
            const { data } = await this.http.instance.get<IPixPaymentStatusResponse>(`/pixQrCode/check?id=${id}`);
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };
}
