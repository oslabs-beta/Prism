import React from "react";

import { HashRouter } from "react-router-dom";
import App from "./components/App";
import { createRoot } from "react-dom/client";

import "./styles_output.css";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
