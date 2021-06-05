export default interface ISignature {
    merchant_id: string
    merchant_key: string
    item_name: string
    email_address: string
    return_url: string
    cancel_url: string
    amount: string
    email_confirmation: string,
    confirmation_address: string
}