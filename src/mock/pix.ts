import { IPixPayment } from "../modules/pix/pix.interface";
import { customerMock } from "./customer";

export const pixMock: IPixPayment = {
    amount: 200,
    customer: customerMock,
    description: 'Remesa enviada para Fulana de Tal',
    expiresIn: 300
}