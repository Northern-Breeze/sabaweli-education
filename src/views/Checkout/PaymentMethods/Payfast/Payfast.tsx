import * as React from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../../../components/Loading";
import { config } from "../../../../config/configs";

import Server from "../../../../service/server";
import Notification from "antd/es/notification";

interface LocationState {
  from: {
    pathname: string;
  };
  title: string;
  price: number;
  package: string;
  name: string;
}

export default function Payfast(props: {
  email: string;
  loading: boolean;
}): JSX.Element {
  const { loading } = props;
  const [price, setPrice] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const [signature, setSignature] = React.useState("");
  const mounted = React.useRef<boolean>(true);

  const location = useLocation<LocationState>();

  React.useEffect(() => {
    const { state } = location;
    setName(state.name);
    setPrice(state.price);
    setTitle(state.package);
    if (!loading && state.price && state.name) {
      Server.payfastSignature({
        merchant_id: config["MERCHANT_ID"],
        merchant_key: config["MERCHANT_KEY"],
        amount: `${state.price}`,
        item_name: state.name,
        email_address: "samuelmthwa79@gmail.com",
        return_url: config["PAYFAST_RETURN_URL"],
        cancel_url: config["PAYFAST_CANCEL_URL"],
        email_confirmation: "1",
        confirmation_address: "samuelmthwa79@gmail.com",
      })
        .then((response) => {
          if (response.data.success) {
            if (mounted.current) {
              setSignature(response.data.signature);
            }
          } else {
            Notification.open({
              type: "error",
              message: "Failed to get the signature",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          Notification.open({
            type: "error",
            message: "could not create signature",
          });
        });
    } else {
      Notification.open({
        type: "error",
        message: "payment gateway not properly setup",
      });
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="stripe-container">
      <div className="form-checkout">
        <div className="product-info">
          <div>
            <h3 className="product-title">
              {title} - {name}
            </h3>
          </div>
          <div>
            <h4 className="product-price">{`$ ${price}`}</h4>
          </div>
        </div>
        <form action={config["PAYFAST_URL"]} method="post">
          <input
            type="hidden"
            name="merchant_id"
            value={config["MERCHANT_ID"]}
          />
          <input
            type="hidden"
            name="merchant_key"
            value={config["MERCHANT_KEY"]}
          />
          <input type="hidden" name="amount" value={price} />
          <input type="hidden" name="item_name" value={name} />
          <input
            type="hidden"
            name="email_address"
            value="samuelmthwa79@gmail.com"
          />
          <input
            type="hidden"
            name="return_url"
            value={config["PAYFAST_RETURN_URL"]}
          />
          <input
            type="hidden"
            name="cancel_url"
            value={config["PAYFAST_CANCEL_URL"]}
          />
          <input type="hidden" name="email_confirmation" value="1" />
          <input
            type="hidden"
            name="confirmation_address"
            value="samuelmthwa79@gmail.com"
          />
          <input type="hidden" name="signature" value={signature} />
          <button
            type="submit"
            className="button primary"
            disabled={!signature}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
