import * as React from "react";
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Notification from "antd/es/notification";
import Button from "../../../../components/Button";

import useOptions from "./helper/useOptions";
import useUser from "../../../../hooks/useUser";
import Server from "../../../../service/server";

type Props = {
  amount: number;
  title: string;
}

const CheckoutForm = (props: Props): JSX.Element => {
  const { amount, title } = props;
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { username } = useUser();
  const history = useHistory();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const cartElements = elements?.getElement(CardElement);
    if (cartElements && stripe) {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cartElements,
        billing_details: { name: username },
      });
      if (error) {
        Notification.open({
          message: "Error",
          description: error.message,
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      } else {
        Server.checkData({
          stripeToken: paymentMethod,
          amount: amount,
          title: title,
          paymentType: 'stripe',
          currency: 'usd'
        })
          .then((response) => {
            if (response.status === 200) {
              if(response.data.success){
                history.push('/checkout?payment-status=success');
              } else {
                Notification.open({
                  type: 'error',
                  message: response.data.message
                })
              }
            } else {
              Notification.open({
                type: "error",
                message: "Something went wrong",
              });
            }
          })
          .catch((error: string) => {
            console.log(error);
            Notification.open({
              type: 'error',
              message: 'Something went wrong, please try again later'
            })
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={options} />
      <Button disabled={true} className="primary" type="submit">
        Pay
      </Button>
    </form>
  );
};

export default CheckoutForm;
