import { HttpService } from '../../api/httpService';
import { IBilling, IBillingListResponse, IBillingResponse } from './billing.interface';

export class BillingProvider {
    private http: HttpService;

    constructor(token: string) {
        this.http = new HttpService(token);
    }

    public create = async (bill: IBilling) => {
        try {
            const { data } = await this.http.instance.post<IBillingResponse>('/billing/create', bill);
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };

    public list = async () => {
        try {
            const { data } = await this.http.instance.get<IBillingListResponse>('/billing/list');
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };
}
