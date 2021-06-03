const devConfig = {
    PAYFAST_URL: 'https://sandbox.payfast.co.za​/eng/process',
    PAYFAST_RETURN_URL: 'https://f1073e10185b.ngrok.io/checkout?payment-status=payment-success',
    PAYFAST_CANCEL_URL: 'https://f1073e10185b.ngrok.io/checkout?payment-status=payment-canceled',
    MERCHANT_KEY: 'q1cd2rdny4a53',
    MERCHANT_ID: '10004002',
    PASSPHRASE: 'payfast'
};

const prodConfigs = {
    PAYFAST_URL: 'https://www.payfast.co.za/eng/process',
    PAYFAST_RETURN_URL: 'https://sabaweli.netlify.app/checkout?payment-status=payment-success',
    PAYFAST_CANCEL_URL: 'https://sabaweli.netlify.app/checkout?payment-status=payment-canceled',
    MERCHANT_KEY: process.env.REACT_APP_MERCHANT_KEY || "",
    MERCHANT_ID: process.env.REACT_APP_MERCHANT_ID || "",
    PASSPHRASE: process.env.PASSPHRASE
}

export const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfigs