import * as React from "react";
import { Card } from "antd";
import Button from "../Button";
import "./Feature.scss";

const { Meta } = Card;

type Props = {
  header: string;
  content: string;
  image: string;
};

export default function Feature(props: Props): JSX.Element {
  const { header, content, image } = props;
  const HandleMore = () => {
    //
  };
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={header} src={image} />}
        className="card"
      >
        <Meta
          title={header}
          description={
            <>
              <div className="card-content-feature">{content}</div>
              <div className="card-footer-feature">
                <div className="button-container">
                  <Button onClick={HandleMore} className="secondary">
                    View More
                  </Button>
                </div>
              </div>
            </>
          }
        ></Meta>
      </Card>
    </>
  );
}
