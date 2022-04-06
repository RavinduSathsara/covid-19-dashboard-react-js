import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate PCR Data
function createData(time, amount) {
  return { time, amount };
}

export default function Chart({ pcrs }) {
  const theme = useTheme();

  const data = [
    createData("Sun", pcrs[0].pcr_count),
    createData("Mon", pcrs[1].pcr_count),
    createData("Tue", pcrs[2].pcr_count),
    createData("Wed", pcrs[3].pcr_count),
    createData("Thu", pcrs[4].pcr_count),
    createData("Fri", pcrs[5].pcr_count),
    createData("Sat", pcrs[6].pcr_count),
    createData("", pcrs[0].pcr_count),
  ];
  return (
    <React.Fragment>
      <Title>This Week</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              PCR Tests
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
