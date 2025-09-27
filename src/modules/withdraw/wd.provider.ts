import { HttpService } from '../../api/httpService';
import { IWithdraw, IWithdrawResponse } from './wd.interface';

export class WithdrawProvider {
    private http: HttpService;

    constructor(token: string) {
        this.http = new HttpService(token);
    }

    public create = async (withdraw: IWithdraw) => {
        try {
            const { data } = await this.http.instance.post<IWithdrawResponse>(
                '/withdraw/create',
                withdraw,
            );
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };

    public findOne = async (externalId: string) => {
        try {
            const { data } = await this.http.instance.get<IWithdrawResponse>(
                `/withdraw/get?externalId=${externalId}`,
            );
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };

    public list = async () => {
        try {
            const { data } = await this.http.instance.get<IWithdrawResponse[]>(
                '/withdraw/list',
            );
            return data;
        } catch (error) {
            return this.http.isError(error);
        }
    };
}
