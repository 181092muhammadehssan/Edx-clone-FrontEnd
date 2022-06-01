import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cards from "./Cards";
import Webapp from "./webapp";
import Signup from "./Signup";
import Chose_page from "./chose_page";

ReactDOM.render(
  <React.StrictMode>
    <Chose_page></Chose_page>
  </React.StrictMode>,
  document.getElementById("root")
);
//<Webapp></Webapp>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
