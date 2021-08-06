import * as React from "react";
import { VictoryPie } from "victory";

export default function PieCart(): JSX.Element {
  return (
    <VictoryPie
      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      data={[
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 },
      ]}
    />
  );
}
