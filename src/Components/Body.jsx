// Baisc
import React, { Component } from "react";

// Libs & Framewroks
import styled from "styled-components";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Typography } from "@mui/material";
import ErrorPage from "./ErrorPage";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.background.appBackground};
  border-radius: 10px;
  padding: 2em 1.5em 2em 0.5em;
  margin: 0;
  color: ${(props) => props.theme.text.secondColor};
  box-shadow: 5px 5px 20px ${(props) => props.theme.background.shadow};
  border-radius: 10px;
  position: relative;

  .info {
    flex-basis: 100%;

    .heading {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .personal {
        display: flex;
        align-items: center;

        .title {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          h2 {
            margin: 0;
            padding-bottom: 0.2rem;
            font-size: 1.3em;
            color: ${(props) => props.theme.text.mainColor};
          }

          a {
            text-decoration: none;
            color: #2196f3;
          }
        }

        .photo {
          margin: 0 1.3em 0 1em;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
          }
        }
      }

      .date {
        padding-top: 1.5rem;
        color: ${(props) => props.theme.text.secondColor};
      }
    }

    p {
      width: 75%;
      text-align: left;
      padding-bottom: 1.3rem;
      margin: 0;
      margin-left: 8.5em;
      color: ${(props) => props.theme.text.secondColor};
    }

    .numbers {
      width: 75%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius: 10px;
      background: ${(props) => props.theme.background.numberBackground};
      color: ${(props) => props.theme.text.numberHeaderColor};
      padding: 1.1em;
      gap: 75px;
      margin-bottom: 1.5rem;
      margin-left: 8.5em;
      padding: 1.2em;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        span:nth-child(2) {
          font-size: 2.7em;
          font-weight: 600;
          color: ${(props) => props.theme.text.numberbodyColor};
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      margin-left: 8.5em;
      padding-right: 2em;
      color: ${(props) => props.theme.text.secondColor};

      .p-1,
      .p-2 {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          .icon {
            color: ${(props) => props.theme.text.mainColor};
          }
        }

        .twitter {
          color: ${(props) => props.theme.text.mainColor};

          a {
            color: ${(props) => props.theme.text.secondColor};
          }
        }

        a {
          text-decoration: none;
          color: ${(props) => props.theme.text.secondColor};
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 2em;

    .info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .heading {
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .personal {
          flex-direction: column;
          gap: 25px;

          .title {
            align-items: center;
          }
        }
      }

      p {
        margin: 0;
        text-align: center;
        width: 100%;
        padding: 0.5em;
        padding-bottom: 1.7em;
        padding-top: 1.3rem;
      }

      .numbers {
        justify-content: center;
        align-items: center;
        margin: 0;
        gap: 60px;
        width: 100%;

        div {
          justify-content: center;

          span:nth-child(2) {
            font-size: 2em;
          }
        }
      }

      .footer {
        margin: 0;
        padding: 2em 1em 0 1em;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 375px) {
    padding: 1em;

    .info {
      .numbers {
        margin: 0;
        gap: 50px;
        width: 95%;
      }

      .footer {
        margin: 0;
        padding: 2em 1em 0 1em;
      }
    }
  }

  @media screen and (max-width: 320px) {
    padding: 1em;

    .info {
      .numbers {
        margin: 0;
        gap: 30px;
        width: 95%;
      }

      .footer {
        margin: 0;
        padding: 2em 1em 0 1em;
      }
    }
  }
`;

// JSX
class Body extends Component {
  render() {
    return (
      <Parent>
        <div className="info">
          <div className="heading">
            <div className="personal">
              <div className="photo">
                <img
                  src={
                    this.props.userData.avatar_url
                      ? this.props.userData.avatar_url
                      : this.props.noUserImage
                  }
                  alt="Github User Image"
                  className="no-user-image"
                />
              </div>

              <div className="title">
                <Typography variant="h2" fontWeight="600">
                  {this.props.userData.name ? this.props.userData.name : "Name"}
                </Typography>
                <a
                  href={this.props.userData.html_url}
                  target="_blank"
                  title="Github Username"
                >
                  {this.props.userData.login
                    ? "@" + this.props.userData.login
                    : "@username"}
                </a>
              </div>
            </div>

            <div className="date">
              {`joined `}
              {this.props.userData.created_at
                ? new Date(this.props.userData.created_at).toDateString()
                : "DD-MM-YYYY"}
            </div>
          </div>

          <Typography variant={"p"} paragraph={true}>
            {this.props.userData.bio ? this.props.userData.bio : "No Bio"}
          </Typography>

          <div className="numbers">
            <div className="repos">
              <span>Repos</span>
              <span>
                {this.props.userData.public_repos
                  ? this.props.userData.public_repos
                  : 0}
              </span>
            </div>

            <div className="followers">
              <span>Followers</span>
              <span>
                {this.props.userData.followers
                  ? this.props.userData.followers
                  : 0}
              </span>
            </div>

            <div className="following">
              <span>Following</span>
              <span>
                {this.props.userData.following
                  ? this.props.userData.following
                  : 0}
              </span>
            </div>
          </div>

          <div className="footer">
            <div className="p-1">
              <div className="address">
                <LocationOnIcon className="icon" />
                <span>
                  {this.props.userData.location
                    ? this.props.userData.location
                    : "Location"}
                </span>
              </div>

              <div className="blog">
                <InsertLinkIcon className="icon" />
                <a
                  href={this.props.userData.blog}
                  target="_blank"
                  title="Blog Link"
                >
                  {this.props.userData.blog === true
                    ? this.props.userData.blog
                    : "Blog"}
                </a>
              </div>
            </div>

            <div className="p-2">
              <div className="twitter">
                <TwitterIcon />

                <a
                  href={this.props.userData.blog}
                  target="_blank"
                  title="Twitter Account"
                >
                  {"Twitter"}
                </a>
              </div>

              <div className="company">
                <ApartmentIcon className="icon" />
                <span>
                  {this.props.userData.company
                    ? this.props.userData.company
                    : "Company"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {this.props.pageState ? <ErrorPage /> : ""}
      </Parent>
    );
  }
}

export default Body;
