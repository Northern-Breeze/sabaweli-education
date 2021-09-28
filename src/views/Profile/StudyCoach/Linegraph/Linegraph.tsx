import * as React from "react";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";

type Props = {
  data: any
}

export default function Linegraph(props: Props): JSX.Element {

  const { data } = props;
  console.log(data);

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={[
          { x: 'Mon', y: 1 },
          { x: 'Tue', y: 2 },
          { x: 'Wed', y: 3 },
          { x: 'Thur', y: 4 },
          { x: 'Fri', y: 5 },
        ]}
      />
      <VictoryLine
        style={{
          data: { stroke: "blue" },
          parent: { border: "1px solid #ccc" },
        }}
        data={[
            { x: 'Mon', y: 2 },
            { x: 'Tue', y: 4 },
            { x: 'Wed', y: 3 },
            { x: 'Thur', y: 1 },
            { x: 'Fri', y: 2 },
        ]}
      />
    </VictoryChart>
  );
}
