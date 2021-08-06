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
            { x: 'Mon', y: 1 },
            { x: 'Tue', y: 2 },
            { x: 'Wed', y: 3 },
            { x: 'Thur', y: 1 },
            { x: 'Fri', y: 5 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 'Mon', y: 1 },
            { x: 'Tue', y: 2 },
            { x: 'Wed', y: 2 },
            { x: 'Thur', y: 2 },
            { x: 'Fri', y: 5 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 'Mon', y: 1 },
            { x: 'Tue', y: 2 },
            { x: 'Wed', y: 2 },
            { x: 'Thur', y: 2 },
            { x: 'Fri', y: 5 },
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  );
}
