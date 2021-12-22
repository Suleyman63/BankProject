import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import StateProvider from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    <ToastContainer autoClose={2000} />
  </React.Fragment>,
  document.getElementById("root")
);
