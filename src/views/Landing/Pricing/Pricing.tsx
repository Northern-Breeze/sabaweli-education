import * as React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../components/Button";
import Pricetag from "../../../components/Pricetag";

import Template from "../../Template";

import "./Pricing.scss";

export default function Pricing(): JSX.Element {
  const history = useHistory();
  return (
    <Template>
      <div className="pricing-container">
        <div className="pricing">
          <div className="price-tag">
            <Pricetag width={200} height={200} />
          </div>
          <div className="columns">
            <div className="cards">
              <div className="price-header">
                <span>BASIC</span>
              </div>
              <div className="price-price">$ 1</div>
              <div className="price-body">
                You can convert 20 mins audio file length for just $1
              </div>
              <div className="price-footer">Get 20 mins</div>
              <div className="price-buy">
                <Button
                  className="primary"
                  onClick={() => {
                    history.push({
                      pathname: "/checkout",
                      state: { package: "basic", price: 1.0, name: '20 mins' },
                    });
                  }}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
            <div className="cards">
              <div className="price-header">
                <span>Radical</span>
              </div>
              <div className="price-price">$ 6</div>
              <div className="price-body">
                You can convert 40 mins audio file length for just $6
              </div>
              <div className="price-footer">GET 40 mins</div>
              <div className="price-buy">
                <Button
                  className="primary"
                  onClick={() => {
                    history.push({
                      pathname: "/checkout",
                      state: { package: "Radical", price: 6.0, name: '40 mins' },
                    });
                  }}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
            <div className="cards">
              <div className="price-header">
                <span>Pro</span>
              </div>
              <div className="price-price">$ 20</div>
              <div className="price-body">
                You can convert 120 mins audio file length for just $20
              </div>
              <div className="price-footer">GET 120 mins</div>
              <div className="price-buy">
                <Button
                  className="primary"
                  onClick={() => {
                    history.push({
                      pathname: "/checkout",
                      state: { package: "Pro", price: 20.0, name: '120 mins' },
                    });
                  }}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
