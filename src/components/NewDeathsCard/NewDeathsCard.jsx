import React from "react";
import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//
import DescriptionAlerts from "../DescriptionAlerts/DescriptionAlerts";
import CircularProgress from "../LinearDeterminate/LinearDeterminate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: " 7px 2px",
  },
});

export default function NewDeathsCard() {
  const classes = useStyles();
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
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://images.unsplash.com/photo-1623438787452-56beec0c9d62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {items.data.local_new_deaths}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Local New Deaths
            </Typography>
            <br />
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              on {items.data.update_date_time}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
