import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";
import Title from "../Title/Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  sprinner: {
    margin: "40px",
  },
});

export default function Deposits() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({
    data: {
      update_date_time: "2021-12-04 22:04:49",
      global_new_cases: 510016,
      global_total_cases: 249461042,
      global_deaths: 50476,
      global_new_deaths: 7456,
      global_recovered: 225913434,
      total_pcr_testing_count: 5694513,
    },
  });
  const classes = useStyles();

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
  if (error) {
    return (
      <div>
        <DescriptionAlerts Error={error.message} />
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <CircularProgress className={classes.sprinner} />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <Title>Globle Total cases</Title>
        <Typography component="p" variant="h4">
          {items.data.global_total_cases}
        </Typography>
        <Title>Globle Total deaths</Title>
        <Typography component="p" variant="h4">
          {items.data.global_deaths}
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          on {items.data.update_date_time}
        </Typography>
        <div></div>
      </React.Fragment>
    );
  }
}
