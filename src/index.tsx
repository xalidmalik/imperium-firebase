import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router as BrowserRouter } from "react-router-dom";
import { History } from "./helpers/Static/History";
import Login from "./pages/Auth/Login";
import { auth } from "./firebase/firebaseconfig";
import SecureStore from "secure-ls";

const sc = new SecureStore();

ReactDOM.render(
  <BrowserRouter history={History}>
    {sc.get("userId") ? <App /> : <Login />}
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
