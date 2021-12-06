import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";

ReactDOM.render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>,

  document.getElementById("root")
);
