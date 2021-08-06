import * as React from "react";
import { VictoryPie } from "victory";

export default function PieCart(): JSX.Element {
  return (
    <VictoryPie
      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      data={[
        { x: "Physics", y: 35 },
        { x: "Math", y: 45 },
        { x: "Chemistry", y: 15 },
      ]}
    />
  );
}
