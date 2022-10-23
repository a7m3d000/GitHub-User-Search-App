// Basic
import React, { Component } from "react";

// Libs & Framewroks
import styled from "styled-components";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// Files
import githubLight from "../images/github-light.png";
import githubDark from "../images/github-dark.png";
import { Typography } from "@mui/material";

// Style
const Parent = styled.section`
  margin: 0;

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.text.searchBackground};

    .theme-sittings {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      .theme-icon {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

// JSX
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeIcon: <LightModeIcon />,
      btnState: true,
    };
  }

  componentDidMount() {
    document
      .querySelector(".no-user-image")
      .setAttribute("src", `${githubLight}`);
    document.body.style.background = "#141c2f";
  }

  render() {
    return (
      <Parent>
        <div className="box">
          <Typography variant="h5" fontWeight="600"> devfinder </Typography>
          <div className="theme-sittings">
            <span>{this.state.btnState ? "Light" : "Dark"}</span>
            <div className="theme-icon" onClick={this.btnHandler}>
              {this.state.themeIcon}
            </div>
          </div>
        </div>
      </Parent>
    );
  }

  themeIconHandler = () => {
    this.state.btnState
      ? this.setState({ themeIcon: <DarkModeIcon /> })
      : this.setState({ themeIcon: <LightModeIcon /> });

    this.state.btnState
      ? this.props.noUserImageHandler(githubDark)
      : this.props.noUserImageHandler(githubLight);
  };

  toggleBtnHandler = () => {
    this.setState({ btnState: !this.state.btnState });
  };

  btnHandler = () => {
    this.toggleBtnHandler();
    this.themeIconHandler();

    this.props.themeChangeHandler(
      !this.state.btnState
        ? {
            background: {
              mainBackground: "#141c2f",
              appBackground: "#1f2a48",
              numberBackground: "#141c2f",
              searchButton: "#1976d2",
              shadow: "#0d121ed4",
            },
            text: {
              mainColor: "#fff",
              secondColor: "#a0a9c4",
              theardColor: "#265797",
              twitterDidabledColor: "#777",
              numberHeaderColor: "a0a9c4",
              numberbodyColor: "#fff",
              searchBackground: "#fff",
              inputColor: "#fff",
            },
          }
        : {
            background: {
              mainBackground: "#F1F7FB",
              appBackground: "#fff",
              numberBackground: "#007fffc7",
              searchButton: "#777",
              shadow: "#9bb8cdab",
            },
            text: {
              mainColor: "#2196f3",
              secondColor: "#2196f3",
              theardColor: "#4361ee",
              twitterDidabledColor: "#777",
              numberHeaderColor: "#fff",
              numberbodyColor: "#fff",
              searchBackground: "#006deb",
              inputColor: "#2196f3",
            },
          }
    );

    this.bodyHandler();
  };

  bodyHandler = () => {
    if (this.state.btnState) {
      document.body.style.background = "#e3f2fd";
    } else {
      document.body.style.background = "#141c2f";
    }
  };
}

export default Header;
