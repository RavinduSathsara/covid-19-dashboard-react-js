import React from "react";
import { useState, useEffect } from "react";
import LinearDeterminate from "../LinearDeterminate/LinearDeterminate";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "../Title/Title";
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";

export default function Chart() {
  const theme = useTheme();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({
    data: {
      update_date_time: "2021-12-04 22:04:49",
      local_new_cases: 740,
      daily_pcr_testing_data: [
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-05",
          pcr_count: "7975",
        },
        {
          date: "2021-12-04",
          pcr_count: "6680",
        },
        {
          date: "2021-12-04",
          pcr_count: "6680",
        },
        {
          date: "2021-12-04",
          pcr_count: "6680",
        },
        {
          date: "2021-12-04",
          pcr_count: "6680",
        },
        {
          date: "2021-12-04",
          pcr_count: "6680",
        },
      ],
    },
  });

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  // Generate Sales Data
  function createData(time, amount) {
    return { time, amount };
  }
  const monday = items.data.daily_pcr_testing_data[0].pcr_count;
  const tuesday = items.data.daily_pcr_testing_data[1].pcr_count;
  const wednesday = items.data.daily_pcr_testing_data[2].pcr_count;
  const thursday = items.data.daily_pcr_testing_data[3].pcr_count;
  const friday = items.data.daily_pcr_testing_data[4].pcr_count;
  const saturday = items.data.daily_pcr_testing_data[5].pcr_count;
  const sunday = items.data.daily_pcr_testing_data[6].pcr_count;
  const data = [
    createData("Mon", monday),
    createData("Tue", tuesday),
    createData("Wed", wednesday),
    createData("Thu", thursday),
    createData("Fri", friday),
    createData("Sat", saturday),
    createData("Sun", sunday),
    createData("", undefined),
  ];

  if (error) {
    return (
      <div>
        <DescriptionAlerts Error={error.message} />
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <LinearDeterminate />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <Title>This Week PCR Testing </Title>
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
            <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary}>
              <Label
                angle={270}
                position="left"
                style={{
                  textAnchor: "middle",
                  fill: theme.palette.text.primary,
                }}
              >
                Testing
              </Label>
            </YAxis>
            <Line
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
}
