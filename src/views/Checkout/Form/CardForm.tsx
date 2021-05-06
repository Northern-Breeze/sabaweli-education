import * as React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Notification from "antd/es/notification";
import Button from "../../../components/Button";
import useOptions from "./helper/useOptions";
import useUser from "../../../hooks/useUser";
import Server from "../../../service/server";

const CheckoutForm = (): JSX.Element => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { username } = useUser();
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
        Notification.open({
          message: "Success",
          description: "Payment processed successfully, waiting on server",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
        Server.checkData({
          stripeToken: paymentMethod,
          amount: 2,
        })
          .then((response) => {
            if (response.status === 200) {
              console.log(response)
            } else {
              Notification.open({
                type: "error",
                message: "Something went wrong",
              });
            }
          })
          .catch((error) => {
            console.log(error)
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={options} />
      <Button disabled={!stripe} className="primary">
        Pay
      </Button>
    </form>
  );
};

export default CheckoutForm;
