import 'dotenv/config';

export const customerMock = {
    name: process.env.USER_NAME || 'your_name',
    cellphone: process.env.USER_CELLPHONE || 'your_phone',
    email: process.env.USER_EMAIL || 'your_email',
    taxId: process.env.USER_TAXID || 'your_taxId',
};
