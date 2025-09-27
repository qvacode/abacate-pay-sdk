import 'dotenv/config';
import { IWithdraw } from '../modules/withdraw/wd.interface';

export const withdrawMock: IWithdraw = {
    description: 'Withdrawal',
    externalId: '1234567890',
    method: 'PIX',
    amount: 350,
    pix: {
        type: 'CPF',
        key: process.env.USER_TAXID as string,
    },
};