import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "bulma/css/bulma.min.css";

import { Provider } from "react-redux";
import { store } from "../src/store/index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
