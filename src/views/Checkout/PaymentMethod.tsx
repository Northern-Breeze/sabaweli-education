import * as React from "react";
import Tabs from 'antd/es/tabs';
import useUser from '../../hooks/useUser';

import './PaymentMethods.scss';
import StripeMethod from './PaymentMethods/Stripe';
import Payfast from "./PaymentMethods/Payfast/Payfast";
import Paypal from "./PaymentMethods/Paypal";
import PayStack from "./PaymentMethods/PayStack/PayStack";

const {TabPane} = Tabs;



export default function PaymentMethod(): JSX.Element {
  const { email, loading } = useUser();
  return (
    <div className="payment-option-container">
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="PayPal" key="1">
                <Paypal />
            </TabPane>
            <TabPane tab="Stripe" key="2">
               <StripeMethod />
            </TabPane>
            <TabPane tab="PayStack" key="3">
                <PayStack email={email} loading={loading} />
            </TabPane>
        </Tabs>
    </div>
  );
}
