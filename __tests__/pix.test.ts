import 'dotenv/config';
import { AbacatepaySDK } from '../src';
import { pixMock } from '../src/mock/pix';

describe('pix payment methods', () => {
    const token = process.env.TOKEN || 'tu_token';
    const SDK = new AbacatepaySDK(token);

    test('should create new pix', async () => {
        const response = await SDK.pix.create(pixMock);
        console.dir(response);
    });

    test('should simulate payment', async () => {
        const id = 'pix_char_uGukbTkdmFmgKR4CNNuBA1wW'
        const response = await SDK.pix.simulatePayment(id);
        console.dir(response);
    });

    test('should check payment status', async () => {
        const id = 'pix_char_uGukbTkdmFmgKR4CNNuBA1wW'
        const response = await SDK.pix.checkStatus(id);
        console.dir(response);
    });
});
