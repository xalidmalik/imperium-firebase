import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Guard from "./Guard";
import * as serviceWorker from "./serviceWorker";
import { Router as BrowserRouter } from "react-router-dom";
import { History } from "./helpers/Static/History";
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./redux/store";



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={History}>
      <PersistGate persistor={persistor}>
        <Guard />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();
