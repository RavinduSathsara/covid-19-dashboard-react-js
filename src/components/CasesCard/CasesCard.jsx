import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";
import EcoTwoToneIcon from "@material-ui/icons/EcoTwoTone";
import Title from "../Title/Title";

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
      update_date_time: "",
      local_new_cases: 400,
      local_total_cases: 568423,
      local_total_number_of_individuals_in_hospitals: 10170,
      local_deaths: 14484,
      local_new_deaths: 255553,
      local_recovered: 542688,
      local_active_cases: 11251,
      total_pcr_testing_count: 5722835,
      daily_pcr_testing_data: [
        {
          date: "2021-12-09",
          pcr_count: "7580",
        },
      ],
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
        <Title>Total PCR Testing </Title>
        <Typography component="p" variant="h5">
          <EcoTwoToneIcon /> {items.data.total_pcr_testing_count}
        </Typography>
        <Title>Today Testing </Title>
        <Typography component="p" variant="h5">
          <EcoTwoToneIcon /> {items.data.daily_pcr_testing_data[0].pcr_count}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          on {items.data.update_date_time}
        </Typography>
      </React.Fragment>
    );
  }
}
