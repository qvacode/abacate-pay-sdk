import 'dotenv/config';
import { AbacatepaySDK } from '../src';
import { billingMock } from '../src/mock/billing';

describe('billing methods', () => {
    const token = process.env.TOKEN || 'tu_token';
    const SDK = new AbacatepaySDK(token);

    test('should create new bill', async () => {
        const response = await SDK.billing.create(billingMock);
        console.dir(response);
    });

    test('should list all bills', async () => {
        const response = await SDK.billing.list();
        console.dir(response);
    });
});
