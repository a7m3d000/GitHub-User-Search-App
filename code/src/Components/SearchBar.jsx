// Basic
import React, { Component } from "react";

// Libs & Frameworks
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import axios from "axios";

// Style
const Parent = styled.section`
  .n {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 20px ${(props) => props.theme.background.shadow};

    .search-box {
      background: ${(props) => props.theme.background.appBackground};
      padding: 0.8em;
      border-radius: 10px;
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      input {
        position: absolute;
        left: 45px;
        top: 50%;
        transform: translateY(-50%);
        width: 70%;

        padding-right: 1em;
        padding-left: 1em;
        font-size: 1.3em;
        outline: none;
        border: none;
        background: ${(props) => props.theme.background.appBackground};
        color: ${(props) => props.theme.text.inputColor};
        font-size: 1em;

        &::placeholder {
          color: ${(props) => props.theme.text.secondColor};
          font-size: 1em;
          padding-left: 1px;
        }
      }

      .s-icon {
        font-size: 1.8em;
        color: ${(props) => props.theme.text.theardColor};
      }

      .search-btn {
        background-color: #0477fc;
        color: #fff;
      }
    }

    @media screen and (max-width: 576px) {
      .search-box {
        input {
          width: 60%;
        }
      }
    }

    @media screen and (max-width: 375px) {
      .search-box {
        input {
          width: 55%;
        }
      }
    }

    @media screen and (max-width: 320px) {
      .search-box {
        input {
          width: 50%;
        }
      }
    }

    @media screen and (max-width: 320px) {
      .search-box {
        input {
          width: 45%;
        }
      }
    }
  }
`;

const SearchButton = styled(Button)`
  color: ${(props) => props.theme.text.theardColor};
  border-radius: 10px !important;

  &:hover {
    background-color: #0264d5 !important;
  }
`;

// JSX
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      userD: "",
      placeholder: "Search Github username...",
    };
  }

  render() {
    return (
      <Parent>
        <div className="n">
          <div className="search-box">
            <SearchIcon className="s-icon" />
            <form onSubmit={this.formHandler}>
              <input
                type="search"
                placeholder={this.state.placeholder}
                onChange={this.inputLiveHandler}
                onFocus={this.onfocusHandler}
                onBlur={this.onblurHandler}
              />
            </form>

            <SearchButton
              variant="contained"
              disableElevation
              className="search-btn"
              onClick={this.getGithubData}
            >
              Search
            </SearchButton>
          </div>
        </div>
      </Parent>
    );
  }

  inputLiveHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  formHandler = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.inputValue}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ userD: response.data });
        this.props.errorPageHandler(false);
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ userD: "" });
        this.props.errorPageHandler(true);
      });

    setTimeout(() => {
      this.props.getUserDataHandler(this.state.userD);
    }, 500);
  };

  getGithubData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.inputValue}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ userD: response.data });
        this.props.errorPageHandler(false);
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ userD: "" });
        this.props.errorPageHandler(true);
      });

    setTimeout(() => {
      this.props.getUserDataHandler(this.state.userD);
    }, 500);
  };

  onfocusHandler = () => {
    this.setState({ placeholder: "" });
  };

  onblurHandler = () => {
    this.setState({ placeholder: "Search Github username..." });
  };
}

export default SearchBar;
