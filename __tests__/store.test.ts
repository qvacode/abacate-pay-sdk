import 'dotenv/config';
import { AbacatepaySDK } from '../src';

describe('store methods', () => {
    const token = process.env.TOKEN || 'tu_token';
    const SDK = new AbacatepaySDK(token);

    test('should get store', async () => {
        const response = await SDK.store.list();
        console.dir(response);
    });
});
