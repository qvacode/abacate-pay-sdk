import { HttpService } from '../../api/httpService';
import { IStoreResponse } from './store.interface';

export class StoreProvider {
    private http: HttpService;

    constructor(token: string) {
        this.http = new HttpService(token);
    }

    public list = async () => {
        try {
            const { data } = await this.http.instance.get<IStoreResponse>(
                '/store/get',
            );
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };
}
