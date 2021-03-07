import React from "react";
import { Line } from "nivo";

export default function OptionsProfit(): JSX.Element {
  const [strike, setStrike] = React.useState(70);
  const [price, setPrice] = React.useState(80);

  return (
    <Line
      data={[
        {
          data: [
            {
              x: 0,
              y: -10,
            },
            {
              x: 80,
              y: 0,
            },
            {
              x: 100,
              y: 20,
            },
          ],
        },
      ]}
      yscale={{
        max: 100,
        min: -100,
      }}
      width={600}
      height={300}
      enableGridY={false}
      enableGridX={false}
      axisBottom={{
        enable: true,
        legend: "AAPL price",
        tickSize: 10,
      }}
    />
  );
}
