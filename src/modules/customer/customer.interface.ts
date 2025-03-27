export interface ICustomer {
    name: string;
    cellphone: string;
    email: string;
    taxId: string;
}

export interface ICreateCustomerResponse {
    data: Data;
    error: string;
}

export interface ICustomerListResponse {
    data: Data[];
    error: string;
}

export interface Data {
    id: string;
    metadata: Metadata;
}

export interface Metadata {
    name: string;
    cellphone: string;
    email: string;
    taxId: string;
}
