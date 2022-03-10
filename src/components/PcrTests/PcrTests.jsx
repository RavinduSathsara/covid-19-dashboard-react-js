import React from "react";
import { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Title/Title";
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";
import LinearDeterminate from "../LinearDeterminate/LinearDeterminate";
// Generate Order Data

export default function PcrTests() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({
    data: {
      update_date_time: "2021-12-04 22:04:49",
      local_new_cases: 7400000,
      local_total_cases: 566936,
      local_total_number_of_individuals_in_hospitals: 9536,
      local_deaths: 14440,
      local_new_deaths: 21,
      local_recovered: 542010,
      local_active_cases: 10486,
      global_new_cases: 510016,
      global_total_cases: 249461042,
      global_deaths: 5047622,
      global_new_deaths: 7456,
      global_recovered: 225913434,
      total_pcr_testing_count: 5694513,
      daily_pcr_testing_data: [
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
        },
        {
          date: "2021-12-06",
          pcr_count: "6191",
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
  }, [items]);

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
        <Title> Local Daily PCR Testing</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>PCR count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[0].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[0].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[1].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[1].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[2].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[2].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[4].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[4].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[5].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[5].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[6].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[6].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[7].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[7].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[8].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[8].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{items.data.daily_pcr_testing_data[9].date}</TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[9].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {items.data.daily_pcr_testing_data[10].date}
              </TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[10].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {items.data.daily_pcr_testing_data[11].date}
              </TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[11].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {items.data.daily_pcr_testing_data[12].date}
              </TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[12].pcr_count}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {items.data.daily_pcr_testing_data[13].date}
              </TableCell>
              <TableCell>
                {items.data.daily_pcr_testing_data[13].pcr_count}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}
