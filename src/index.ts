import { BillingProvider } from './modules/billing/billing.provider';
import { CustomerProvider } from './modules/customer/customer.provider';
import { PixProvider } from './modules/pix/pix.provider';
import { StoreProvider } from './modules/store/store.provider';
import { WithdrawProvider } from './modules/withdraw/wd.provider';

export class AbacatepaySDK {
    public customer: CustomerProvider;
    public billing: BillingProvider;
    public pix: PixProvider;
    public withdraw: WithdrawProvider;
    public store: StoreProvider;

    constructor(token: string) {
        this.customer = new CustomerProvider(token);
        this.billing = new BillingProvider(token);
        this.pix = new PixProvider(token);
        this.withdraw = new WithdrawProvider(token);
        this.store = new StoreProvider(token);
    }
}
