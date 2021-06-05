export default interface IData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stripeToken: any;
  amount: number;
  paymentType: string;
  title: string;
  currency: string;
}
