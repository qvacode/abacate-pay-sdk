import { ICreateCustomerResponse, ICustomer } from '../customer/customer.interface';

export type TBillingFrequency = 'ONE_TIME' | 'MULTIPLE_PAYMENT';
export type TBillingMethods = 'PIX';

export interface IBillingProducts {
    externalId:  string;
    name:        string;
    description: string;
    quantity:    number;
    price:       number;
}

export interface IBilling {
    frequency:     TBillingFrequency;
    methods:       TBillingMethods[];
    products:      IBillingProducts[];
    returnUrl:     string; // 'https://example.com/billing',
    completionUrl: string; // 'https://example.com/completion',
    customerId:    string; // 'cust_abcdefghij',
    customer:      ICustomer;
}

export interface IBillingResponse {
    data:  Data;
    error: string;
}

export interface IBillingListResponse {
    data:  Data[];
    error: string;
}

export interface Data {
    id:          string;
    url:         string;
    amount:      number;
    status:      string;
    devMode:     boolean;
    methods:     string[];
    products:    Product[];
    frequency:   string;
    nextBilling: null;
    customer:    ICreateCustomerResponse;
}

export interface Product {
    id:         string;
    externalId: string;
    quantity:   number;
}

