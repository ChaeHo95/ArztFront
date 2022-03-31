import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Browser from "./Browser";
import Header from "./Layout/Header";
import "./App.css";
import './dropdown.css'
import './Styles/util.css'

ReactDOM.render(
  <React.StrictMode>
    <Browser />
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
