import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") ?? document.body
);
root.render(
  <React.StrictMode>
    <Router basename="/portfolio">
      <App />
    </Router>
  </React.StrictMode>
);
