import * as React from "react";
import Loading from "../../../../components/Loading";
import { config } from "../../../../config/configs";

export default function Payfast(props: {
  email: string;
  loading: boolean;
}): JSX.Element {
  const { loading } = props;


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="stripe-container">
      <div className="form-checkout">
        <div className="product-info">
          <div>
            <h3 className="product-title">
              Test - payment
            </h3>
          </div>
          <div>
            <h4 className="product-price"></h4>
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
          <input type="hidden" name="amount" value="10" />
          <input type="hidden" name="item_name" value="test" />
          <input type="hidden" name="email_confirmation" value="1" />
          <input
            type="hidden"
            name="confirmation_address"
            value=""
          />
          <button
            type="submit"
            className="button primary"
            disabled={true}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
