import * as React from "react";
import { Card } from "antd";
import {useHistory} from 'react-router-dom';
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
  const history = useHistory();
  const HandleMore = () => {
    history.push('/features');
  };
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={header} src={image} width="200" height="300" />}
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
