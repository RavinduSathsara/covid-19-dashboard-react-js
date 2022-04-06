import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ data, date }) {
  return (
    <React.Fragment>
      <Title>Global new cases</Title>
      <Typography component="p" variant="h4">
        {data}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {date}
      </Typography>
    </React.Fragment>
  );
}
