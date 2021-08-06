import * as React from "react";
import { VictoryBar, VictoryChart, VictoryGroup } from "victory";

type Props = {
  loading: boolean;
};

export default function Bargraph(props: Props): JSX.Element {
  const { loading } = props;
  return (
    <VictoryChart>
      <VictoryGroup offset={20} colorScale={"qualitative"}>
        <VictoryBar
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 5 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 7 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  );
}
