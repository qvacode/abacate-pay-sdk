import { HttpService } from '../../api/httpService';
import { ICreateCustomerResponse, ICustomer, ICustomerListResponse } from './customer.interface';

export class CustomerProvider {
    private http: HttpService;

    constructor(token: string) {
        this.http = new HttpService(token);
    }

    public create = async (customer: ICustomer) => {
        try {
            const { data } = await this.http.instance.post<ICreateCustomerResponse>('/customer/create', customer);
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };

    public list = async () => {
        try {
            const { data } = await this.http.instance.get<ICustomerListResponse>('/customer/list');
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };
}
