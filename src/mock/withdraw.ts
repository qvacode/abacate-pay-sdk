import 'dotenv/config';
import { IWithdraw } from '../modules/withdraw/wd.interface';

export const withdrawMock: IWithdraw = {
    description: 'Withdrawal',
    externalId: '770428a9-95ed-4dfc-8ebe-ded230aad8ca',
    method: 'PIX',
    amount: 350,
    pix: {
        type: 'CPF',
        key: process.env.USER_TAXID as string,
    },
};