export interface IStoreResponse {
    error: null;
    data:  Data;
}

export interface Data {
    id:      string;
    name:    string;
    balance: Balance;
}

export interface Balance {
    available: number;
    pending:   number;
    blocked:   number;
}
