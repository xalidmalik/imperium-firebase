import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router as BrowserRouter } from "react-router-dom";
import { History } from "./helpers/Static/History";
require('dotenv').config()

ReactDOM.render(
  <BrowserRouter history={History}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
