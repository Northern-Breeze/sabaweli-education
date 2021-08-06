import * as React from "react";
import { VictoryPie } from "victory";

export default function PieCart(): JSX.Element {
  return (
    <VictoryPie
      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      data={[
        { x: "Mon", y: 35 },
        { x: "Tue", y: 35 },
        { x: "Wed", y: 35 },
        { x: "Thur", y: 40 },
        { x: "Fri", y: 55 },
      ]}
    />
  );
}
