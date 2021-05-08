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
              <div className="price-price">$ 2</div>
              <div className="price-body">
                Great if you just want to get your feet wet and start using our
                services
              </div>
              <div className="price-footer">GET 20 MB</div>
              <div className="price-buy">
                <Button
                  className="primary"
                  onClick={() => {
                    history.push({
                      pathname: "/checkout",
                      state: { package: "basic", price: 2.0, name: '20 MB' },
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
              <div className="price-price">$ 14</div>
              <div className="price-body">
                Great if you just want to get your feet wet and start using our
                services
              </div>
              <div className="price-footer">GET 30 MB</div>
              <div className="price-buy">
                <Button
                  className="primary"
                  onClick={() => {
                    history.push({
                      pathname: "/checkout",
                      state: { package: "Radical", price: 14.0, name: '30 MB' },
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
              <div className="price-price">$ 30</div>
              <div className="price-body">
                Great if you just want to get your feet wet and start using our
                services
              </div>
              <div className="price-footer">GET 80 MB</div>
              <div className="price-buy">
                <Button
                  className="primary"
                  onClick={() => {
                    history.push({
                      pathname: "/checkout",
                      state: { package: "Pro", price: 30.0, name: '80 MB' },
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
