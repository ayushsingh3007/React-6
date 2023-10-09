import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./Store/Store";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
