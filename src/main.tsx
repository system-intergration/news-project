import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FavoritePage, HomePage } from "./screens";
import { Navbar } from "./components";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  rootElement
);
