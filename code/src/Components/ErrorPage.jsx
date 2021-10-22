// Basic
import React, { Component } from "react";

// Libs & Frameworks
import styled from "styled-components";
import { Typography } from "@mui/material";

// Files
import errorImage from "../images/error.png";
import errorVector from "../images/errorVector.png";

// Style
const Parent = styled.section`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background.appBackground};
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .error-vector {
    width: 75%;
    height: 85%;
    position: absolute;
    bottom: -10px;
    right: -30px;
    z-index: 1;
    opacity: 0.1;
  }

  .content {
    color: ${(props) => props.theme.text.mainColor};
    z-index: 1;

    img {
      width: 125px;
      height: 125px;
      animation: error 8s linear infinite alternate;
    }

    h4 {
      padding-top: 0.7em;
    }

    @keyframes error {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-50px);
      }
    }
  }
`;

// JSX
const ErrorPage = () => {
  return (
    <Parent>
      <img src={errorVector} alt="404 Error Image" className="error-vector" />

      <div className="content">
        <img src={errorImage} alt="Error Page Image" />
        <Typography variant="h4">Sorry :(</Typography>

        <Typography paragraph={true} style={{ paddingTop: "0.5em" }}>
          Sorry, there is no account with this name
        </Typography>
      </div>
    </Parent>
  );
};

export default ErrorPage;
