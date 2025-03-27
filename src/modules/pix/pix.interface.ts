import { ICustomer } from '../customer/customer.interface';

export interface IPixPayment {
    amount:      number;
    expiresIn:   number;
    description: string;
    customer:    ICustomer;
}

export interface IPixPaymentResponse {
    data:  IPixData;
    error: string;
}

export interface IPixData {
    id:           string;
    amount:       number;
    status:       string;
    devMode:      boolean;
    brCode:       string;
    brCodeBase64: string;
    platformFee:  number;
    createdAt:    Date;
    updatedAt:    Date;
    expiresAt:    Date;
}

export type TPixPaymentStatus = 'PENDING' | 'EXPIRED' | 'CANCELLED' | 'PAID' | 'REFUNDED';

export interface IPixPaymentStatusResponse {
    data:  Data;
    error: string;
}

export interface Data {
    status:    TPixPaymentStatus;
    expiresAt: Date;
}

