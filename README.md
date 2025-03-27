# AbacatepaySDK

AbacatepaySDK is a library that provides an interface to interact with Abacatepay services. This SDK makes it easy to integrate payment functionalities and customer management into your applications.

## Installation

```bash
npm install abacatepay-sdk
```

## Features

The SDK provides access to the following modules:

- **Customer**: Customer management
- **Billing**: Billing management
- **PIX**: PIX payment integration

## Basic Usage

```typescript
import { AbacatepaySDK } from 'abacatepay-sdk';

// Initialize the SDK with your access token
const sdk = new AbacatepaySDK('your-access-token');
```

## API Reference

### Customer Provider

The Customer Provider allows you to manage customer information and operations.

```typescript
// Create a new customer
const customer = await sdk.customer.create({
    name: string,
    email: string,
    // ... other customer data according to ICustomer interface
});

// List all customers
const customers = await sdk.customer.list();
```

### Billing Provider

The Billing Provider handles all billing-related operations. Supports one-time and multiple payments via PIX.

```typescript
// Create a new billing
const billing = await sdk.billing.create({
    frequency: 'ONE_TIME' | 'MULTIPLE_PAYMENT',
    methods: ['PIX'],
    products: [
        {
            externalId: string,
            name: string,
            description: string,
            quantity: number,
            price: number
        }
    ],
    returnUrl: 'https://example.com/billing',
    completionUrl: 'https://example.com/completion',
    customerId: string,
    customer: ICustomer
});

// List all billings
const billings = await sdk.billing.list();
```

### PIX Provider

The PIX Provider manages PIX payment operations.

```typescript
// Create a new PIX payment
const pixPayment = await sdk.pix.create({
    // Payment details according to IPixPayment interface
});

// Simulate a PIX payment (useful for testing)
const simulatedPayment = await sdk.pix.simulatePayment('payment_id');

// Check payment status
const status = await sdk.pix.checkStatus('payment_id');
```

## Types and Interfaces

### Billing Types

```typescript
type TBillingFrequency = 'ONE_TIME' | 'MULTIPLE_PAYMENT';
type TBillingMethods = 'PIX';

interface IBillingProducts {
    externalId: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
}

interface IBilling {
    frequency: TBillingFrequency;
    methods: TBillingMethods[];
    products: IBillingProducts[];
    returnUrl: string;
    completionUrl: string;
    customerId: string;
    customer: ICustomer;
}
```

## Error Handling

All methods include error handling through the HttpService. Errors are processed and returned in a standardized format:

```typescript
try {
    const customer = await sdk.customer.create({
        // customer data
    });
} catch (error) {
    // Error will be processed by http.isError()
}
```

## Project Structure

src/
├── modules/
│ ├── billing/
│ │ ├── billing.interface.ts
│ │ └── billing.provider.ts
│ ├── customer/
│ │ ├── customer.interface.ts
│ │ └── customer.provider.ts
│ └── pix/
│ ├── pix.interface.ts
│ └── pix.provider.ts
└── index.ts

## Requirements

- Node.js
- Valid Abacatepay access token

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please contact [d3vqba@gmail.com]