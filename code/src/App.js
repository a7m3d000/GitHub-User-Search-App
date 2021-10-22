// Basic
import React, { Component } from "react";

// Libs & Frameworks
import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

// Components
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";
import Alert from "@mui/material/Alert";

// Style
const Parent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 3rem 0;
`;

const GridContainer = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

// JSX
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
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
      },

      userData: "",
      noUserImage: "",
      errorMessage: false,
      pic: "",
      pageState: false,
    };
  }

  componentDidMount() {
    let metaThemeColor = document.querySelector("meta[name='theme-color']");
    metaThemeColor.setAttribute("content", "#0477fc");
  }

  render() {
    return (
      <Parent className="App">
        <ThemeProvider theme={this.state.theme}>
          <GridContainer container spacing={4} justifyContent="center">
            <Item xs={11} sm={10} md={8}>
              <Header
                themeChangeHandler={this.themeChangeHandler}
                noUserImageHandler={this.noUserImageHandler}
              />
            </Item>

            <Item xs={11} sm={10} md={8}>
              <SearchBar
                getUserDataHandler={this.getUserDataHandler}
                noUserImageHandler={this.noUserImageHandler}
                errorPageHandler={this.errorPageHandler}
              />
            </Item>

            <Item xs={11} sm={10} md={8}>
              <Body
                userData={this.state.userData}
                noUserImage={this.state.noUserImage}
                pic={this.state.pic}
                pageState={this.state.pageState}
              />
            </Item>
          </GridContainer>
        </ThemeProvider>
      </Parent>
    );
  }

  themeChangeHandler = (theme) => {
    this.setState({ theme: theme });
  };

  getUserDataHandler = (data) => {
    this.setState({ userData: data });
  };

  noUserImageHandler = (img) => {
    this.setState({ noUserImage: img });
  };

  errorPageHandler = (pageState) => {
    pageState
      ? this.setState({ pageState: pageState })
      : this.setState({ pageState: false });
  };
}

export default App;
