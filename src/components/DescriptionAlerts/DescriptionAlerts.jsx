import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {props.Error === "Failed to fetch"
          ? "Check Internet Connection"
          : props.Error}
        — <strong>check it out!</strong>
      </Alert>
    </div>
  );
}
