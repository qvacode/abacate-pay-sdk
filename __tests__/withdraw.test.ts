import 'dotenv/config';
import { AbacatepaySDK } from '../src';
import { withdrawMock } from '../src/mock/withdraw';

describe('withdraw methods', () => {
    const token = process.env.TOKEN || 'tu_token';
    const SDK = new AbacatepaySDK(token);

    test('should create new withdraw', async () => {
        const response = await SDK.withdraw.create(withdrawMock);
        console.dir(response);
    });

    test('should get withdraw by external id', async () => {
        const id = '1234567890'
        const response = await SDK.withdraw.findOne(id);
        console.dir(response);
    });

    test('should get all withdraws', async () => {
        const response = await SDK.withdraw.list();
        console.dir(response);
    });
});
