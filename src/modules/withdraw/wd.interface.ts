export type TWithdrawMethod = 'PIX';
export type TPixOptions = 'CPF' | 'CNPJ' | 'PHONE' | 'EMAIL' | 'RANDOM';

export interface IWithdraw {
    description: string;
    externalId:  string;
    method:      TWithdrawMethod;
    /**
     * @param amount - Amount in cents
     * @description Minimum amount is 350 (R$ 3.50)
     * @example 350 = R$ 3.50
     */
    amount:      number;
    pix:         Pix;
}

export interface Pix {
    type: TPixOptions;
    key:  string;
}

export interface IWithdrawResponse {
    data:  IWithdrawData;
    error: null;
}

export type TWithdrawStatus = 'PENDING' | 'EXPIRED' | 'CANCELLED' | 'COMPLETE' | 'REFUNDED';
export type TWithdrawKind = 'PAYMENT' | 'WITHDRAW';
export interface IWithdrawData {
    id:          string;
    status:      TWithdrawStatus;
    devMode:     boolean;
    receiptUrl:  string;
    kind:        TWithdrawKind;
    amount:      number;
    platformFee: number;
    externalId:  string;
    createdAt:   string;
    updatedAt:   string;
}

