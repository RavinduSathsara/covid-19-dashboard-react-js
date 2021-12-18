import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { Link } from "react-router-dom";
export const mainListItems = (
  <div>
    {/* Dashbord Icon */}
    <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />{" "}
      </ListItem>
    </Link>
    {/* PCr test Icon */}
    <Link
      to="pcr_reports"
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Pcr Reports" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText
        onClick={() => {
          alert("This feature is not available yet");
        }}
        primary="Last month"
      />
    </ListItem>
  </div>
);
