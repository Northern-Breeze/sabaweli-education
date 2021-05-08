import * as React from "react";
import Animation from "./Animation";

interface Props {
  width: number;
  height: number;
}

export default function Pricetag(props: Props): JSX.Element {
    const { width, height } =props;
  return (
    <div style={{ width: width, height: height }}>
      <Animation />
    </div>
  );
}
