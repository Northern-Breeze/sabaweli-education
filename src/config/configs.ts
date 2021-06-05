const devConfig = {
    PAYFAST_URL: 'https://sandbox.payfast.co.za​/eng/process',
    PAYFAST_RETURN_URL: 'https://1e9f6a213022.ngrok.io/checkout?payment-status=success',
    PAYFAST_CANCEL_URL: 'https://1e9f6a213022.ngrok.io/checkout?payment-status=canceled',
    MERCHANT_KEY: 'q1cd2rdny4a53',
    MERCHANT_ID: '10004002',
    PASSPHRASE: 'payfast',
    PAYPAL_CLIENT_ID: process.env.REACT_APP_PAYPAL_CLIENT_ID || "",
    PAYPAL_SECRET_KEY: process.env.REACT_APP_PAYPAL_SECRETE_KEY || ""
};

const prodConfigs = {
    PAYFAST_URL: 'https://www.payfast.co.za/eng/process',
    PAYFAST_RETURN_URL: 'https://sabaweli.netlify.app/checkout?payment-status=success',
    PAYFAST_CANCEL_URL: 'https://sabaweli.netlify.app/checkout?payment-status=anceled',
    MERCHANT_KEY: process.env.REACT_APP_MERCHANT_KEY || "",
    MERCHANT_ID: process.env.REACT_APP_MERCHANT_ID || "",
    PASSPHRASE: process.env.PASSPHRASE,
    PAYPAL_CLIENT_ID: process.env.REACT_APP_PAYPAL_CLIENT_ID_PROD || "",
    PAYPAL_SECRET_KEY: process.env.REACT_APP_PAYPAL_SECRETE_KEY_PROD || ""
}

export const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfigs