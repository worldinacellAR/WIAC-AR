import React, { Component } from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import BgImage from "../Files/WIAC00.jpg";
import holoicon from "../Files/holo.png";
import "../CSS/home_Data.css";
import vr_icon from "../Files/vr_icon.png";
import usc_logo from "../Files/usc_games.png";
import v4 from "../Files/v4.2.png";
import { Link } from "react-router-dom";
import bg_gradient from "../Files/angryimg.png";
import bg_video from "../Files/oneplayerdemo.mp4";
import { IoIosPause } from "react-icons/io";
import pause_img from "../Files/pause.png";
import play_img from "../Files/play.png";
import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";
import About from "./about";
class HomeData extends Component {
  state = {
    imgLink: "https://img.icons8.com/dotty/80/000000/pause.png",
  };
  playVideo() {
    if (this.refs.vidRef.paused) {
      this.setState(
        {
          imgLink: "https://img.icons8.com/dotty/80/000000/pause.png",
        },
        () => {
          this.refs.vidRef.play();
        }
      );
    } else {
      this.setState(
        {
          imgLink: "https://img.icons8.com/dotty/80/000000/youtube-play.png",
        },
        () => {
          this.refs.vidRef.pause();
        }
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="card bg-dark text-white"
          style={{ textAlign: "center", height: "100%" }}
        >
          <div className="wrapper">
            <video
              ref="vidRef"
              className="video"
              id="background-video"
              width="100%"
              loop
              autoPlay
              muted
            >
              <source src={bg_video} type="video/mp4" />
            </video>
            <div
              style={{
                cursor: "pointer",
                backgroundImage: `url(${this.state.imgLink})`,
              }}
              onClick={this.playVideo.bind(this)}
              className="playpause"
            />
          </div>

          <div className="card-img-overlay card_center">
            <Card.Text
              style={{ fontSize: "7rem", letterSpacing: "0.1rem" }}
              className="card_title_home"
            >
              World in a cell AR
            </Card.Text>
            <img src={usc_logo} height="78"></img>
            <br />
            <br />
            <Link to="/videos">
              <button type="button" className="btn btn-danger">
                Watch Trailer
              </button>
            </Link>
            <span
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                fontSize: "2.1rem",
                color: "#000",
              }}
            >
              |
            </span>
            <Link to="/about">
              <button
                style={{ marginLeft: "1.5rem" }}
                type="button"
                className="btn btn-primary"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "800px",
            width: "100%",
            backgroundImage: `url(${v4})`,
          }}
        >
          <CardDeck
            style={{
              margin: "auto",
              flexDirection: "row",
            }}
          >
            <Card
              style={{
                marginLeft: "10%",
                display: "flex",
                alignItems: "center",
                borderRadius: "0.5rem",
              }}
              bg="light"
              text="dark"
              className="col-md-3"
            >
              <img height="150" width="150" src={vr_icon} />
              <Card.Body>
                <Card.Title
                  className="card_title"
                  style={{
                    marginTop: "2%",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  World in a cell{" "}
                </Card.Title>
                <Card.Text className="card_text">
                  Led by Professor Alex McDowell at USC School of Cinematic
                  Arts, the World-building Media Lab (WbML) began this major
                  collaboration with the Bridge Institute, to create a fully
                  experiential virtual world of a single Pancreatic Beta Cell,
                  using the metaphor of the complex systems of a city.
                </Card.Text>
                <a
                  style={{ marginTop: "2.5rem", marginLeft: "32%" }}
                  href="https://worldinacell.com/"
                  class="btn btn-info"
                  role="button"
                  target="_blank"
                >
                  Official Website
                </a>
              </Card.Body>
            </Card>

            <Card
              style={{ alignItems: "center", borderRadius: "0.5rem" }}
              bg="light"
              text="dark"
              className="col-md-3"
            >
              <img width="150" height="150" src={holoicon} />
              <Card.Body>
                <Card.Title
                  className="card_title"
                  style={{
                    marginTop: "2%",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  World in a cell AR Experience
                </Card.Title>
                <Card.Text className="card_text">
                  Our project extends the existing work done by the World in a
                  Cell team into an AR experience using Microsoft hololens 1 for
                  viewing and interaction, supporting multi-player and real-time
                  interaction between players. This experience allows the
                  players to understand more about the synergy of several
                  proteins inside the pancreatic beta cells.
                </Card.Text>
                <Link to="/about">
                  <button
                    style={{ marginTop: "2%", marginLeft: "36%" }}
                    type="button"
                    className="btn btn-info"
                  >
                    Learn more
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <MDBFooter className="font-small">
          <MDBContainer fluid className="text-center"></MDBContainer>
          <div className="footer-copyright text-center bg_footer">
            <MDBContainer fluid>
              <br />
              &copy;
              {"Spring 2020 CSCI 538 Augmented, Virtual, and Mixed Reality"}
              <img src={usc_logo} height="50"></img>
            </MDBContainer>
          </div>
        </MDBFooter>
      </React.Fragment>
    );
  }
}

export default HomeData;
