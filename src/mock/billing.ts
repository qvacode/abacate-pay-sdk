import { IBilling } from '../modules/billing/billing.interface';
import { customerMock } from './customer';

export const billingMock: IBilling = {
    methods: ['PIX'],
    frequency: 'ONE_TIME',
    completionUrl: 'https://solucionesfinancierasglobales.com/',
    customer: customerMock,
    customerId: 'cust_UP3zFcmCQtgNTySWFwAGUGpT',
    products: [{ description: 'remesa Familiar', externalId: 'custom_id', name: 'Remesa', price: 200, quantity: 1 }],
    returnUrl: 'https://solucionesfinancierasglobales.com/',
};
