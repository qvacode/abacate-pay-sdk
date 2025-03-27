import 'dotenv/config';
import { AbacatepaySDK } from '../src';
import { customerMock } from '../src/mock/customer';

describe('customer operations', () => {
    const token = process.env.TOKEN || 'tu_token';
    const SDK = new AbacatepaySDK(token);

    test('should create new customer', async () => {
        const response = await SDK.customer.create(customerMock);
        console.log({ response });
    });

    test('should return customers list', async () => {
        const response = await SDK.customer.list();
        console.dir(response);
    });
});
