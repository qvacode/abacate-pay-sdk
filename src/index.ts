import { BillingProvider } from './modules/billing/billing.provider';
import { CustomerProvider } from './modules/customer/customer.provider';
import { PixProvider } from './modules/pix/pix.provider';

export class AbacatepaySDK {
    public customer: CustomerProvider;
    public billing: BillingProvider;
    public pix: PixProvider

    constructor(token: string) {
        this.customer = new CustomerProvider(token);
        this.billing = new BillingProvider(token);
        this.pix = new PixProvider(token)
    }
}
