import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/index.scss";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {" "}
      <App />
    </Router>
  </React.StrictMode>
);
