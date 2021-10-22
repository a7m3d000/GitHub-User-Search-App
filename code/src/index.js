/***** Basics *****/
import React from "react";
import ReactDOM from "react-dom";

/***** Libs & Frameworks *****/
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

/***** App *****/
import App from "./App";
import { Container } from "@mui/material";


// JSX
ReactDOM.render(
  <Container className="c">
    <App />
  </Container>,
  document.getElementById("root")
);
