import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";
import LinearDeterminate from "../LinearDeterminate/LinearDeterminate";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(date, pcrcount) {
//   return { date, pcrcount };
// }

// let rows = [createData("", 159, 6.0)];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
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
  }, []);
  const classes = useStyles();
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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>PCR count</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {items.data.daily_pcr_testing_data[0].date}
              </StyledTableCell>
              <StyledTableCell>
                {items.data.daily_pcr_testing_data[0].pcr_count}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                2
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {items.data.daily_pcr_testing_data[1].date}
              </StyledTableCell>
              <StyledTableCell>
                {items.data.daily_pcr_testing_data[1].pcr_count}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                3
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {items.data.daily_pcr_testing_data[2].date}
              </StyledTableCell>
              <StyledTableCell>
                {items.data.daily_pcr_testing_data[2].pcr_count}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                4
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {items.data.daily_pcr_testing_data[3].date}
              </StyledTableCell>
              <StyledTableCell>
                {items.data.daily_pcr_testing_data[3].pcr_count}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                5
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {items.data.daily_pcr_testing_data[4].date}
              </StyledTableCell>
              <StyledTableCell>
                {items.data.daily_pcr_testing_data[4].pcr_count}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                6
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {items.data.daily_pcr_testing_data[5].date}
              </StyledTableCell>
              <StyledTableCell>
                {items.data.daily_pcr_testing_data[5].pcr_count}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                7
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {items.data.daily_pcr_testing_data[6].date}
              </StyledTableCell>
              <StyledTableCell>
                {items.data.daily_pcr_testing_data[6].pcr_count}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
