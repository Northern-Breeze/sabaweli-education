import * as React from "react";
import { VictoryPie } from "victory";

type Data = { id: number; duration: number; name: string; sessionId: number };

type Props = {
  data?: Data[];
};

type Transformed = {
  x: string;
  y: number;
};

export default function PieCart(props: Props): JSX.Element {
  const { data } = props;
  const [transformed, setTransformed] = React.useState<Transformed[]>([]);

  React.useEffect(() => {
    if (data) {
      let sum = 0;
      data.forEach((i) => {
        sum += i.duration;
      });
      const payload = data.map((item) => {
        const diff = Math.floor((item.duration / sum) * 100);
        return {
          x: `${item.name} ${diff}%`,
          y: diff,
        };
      });
      setTransformed(payload);
    }
  }, []);

  return (
    <>
      {data && (
        <VictoryPie
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={transformed}
        />
      )}
    </>
  );
}
