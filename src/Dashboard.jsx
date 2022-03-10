import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Route, Routes } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Swal from "sweetalert2";
//components
import {
  mainListItems,
  secondaryListItems,
} from "./components/listItems/listItems";
import Chart from "./components/Chart/Chart";
import CasesCard from "./components/CasesCard/CasesCard";
import PcrTests from "./components/PcrTests/PcrTests";
import TotalCasesCard from "./components/TotalCasesCard/TotalCasesCard";
import TotalDeathsCard from "./components/TotalDeathsCard/TotalDeathsCard";
import NewDeathsCard from "./components/NewDeathsCard/NewDeathsCard";
import CustomizedTables from "./components/CustomizedTables/CustomizedTables";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Covid 19 Dashboard - Sathsara
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  cards: {
    width: "340px",
    margin: "5px",
  },
  pcrTable: {
    position: "relative",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [showAlert, setShowAlert] = useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    axios
      .get("https://www.hpb.health.gov.lk/api/get-current-statistical", {
        "Content-Type": "application/json",
        Accept: "application/json",
      })
      .then((res) => setShowAlert(res.data.data.global_deaths))
      .catch((err) => console.log(err));
  }, []);

  const showAlertFun = () => {
    Swal.fire("Global Deaths !", `  ${showAlert}`, "warning");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Covid 19 Dashboard - Sri Lanka
          </Typography>
          <IconButton onClick={showAlertFun} color="inherit">
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}{" "}
            <Routes>
              <Route
                path="/"
                element={
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                      <Chart />
                    </Paper>
                  </Grid>
                }
              />
            </Routes>
            {/* Recent Cases */}
            <Routes>
              <Route
                path="/"
                element={
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <CasesCard />
                    </Paper>
                  </Grid>
                }
              />
            </Routes>
            {/* Recent Orders */}
            <Routes>
              <Route
                path="/pcr_reports"
                element={
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <PcrTests />
                    </Paper>
                  </Grid>
                }
              />
            </Routes>
            <hr />
            <Routes>
              <Route
                path="/"
                element={
                  <Grid container spacing={1}>
                    <Grid item xs>
                      <Paper className={classes.cards}>
                        <TotalCasesCard />
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.cards}>
                        <TotalDeathsCard />
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.cards}>
                        <NewDeathsCard />
                      </Paper>
                    </Grid>
                  </Grid>
                }
              />
            </Routes>
            <hr />
            <Routes>
              <Route
                path="/"
                element={
                  <Grid item xs={12}>
                    <Paper className={classes.pcrTable}>
                      {/* <PcrTests /> */}
                      <CustomizedTables />
                    </Paper>
                  </Grid>
                }
              />
            </Routes>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
