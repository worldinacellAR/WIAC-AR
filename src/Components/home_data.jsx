import React, { Component } from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import BgImage from "../Files/WIAC00.jpg";
import holoicon from "../Files/holo.png";
import "../CSS/home_Data.css";
import vr_icon from "../Files/vr_icon.png";
import usc_logo from "../Files/usc_games.png";
import v4 from "../Files/v4.1.png";
import { Link } from "react-router-dom";

import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";
import About from "./about";

class HomeData extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="card bg-dark text-white"
          style={{ textAlign: "center", height: "100%" }}
        >
          <img src={BgImage} alt="Card image" />
          <div className="card-img-overlay card_center">
            <Card.Text style={{ fontSize: "7rem" }} className="card_title">
              World in a cell AR
            </Card.Text>
            <Card.Text style={{ margin: "1rem" }} className="card_text">
              Hello, this is our project
            </Card.Text>
            <Link to="/videos">
              <button
                style={{ marginTop: "1rem" }}
                type="button"
                className="btn btn-danger"
              >
                Watch Trailer
              </button>
            </Link>
            <Link to="/about">
              <button
                style={{ marginTop: "1rem", marginLeft: "1.5rem" }}
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
            height: "600px",
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
                <Card.Title style={{ marginTop: "2%" }}>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <a
                  style={{ marginTop: "2%", marginLeft: "36%" }}
                  href="https://worldinacell.com/"
                  class="btn btn-info"
                  role="button"
                  target="_blank"
                >
                  Learn more
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
                <Card.Title style={{ marginTop: "2%" }}>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
          <div className="footer-copyright text-center">
            <MDBContainer fluid>
              <br />
              &copy; {new Date().getFullYear()} Copyright:
              {
                "Spring 2020 : Augmented, Mixed and Virtual reality class - World in a Cell Augmented Reality team"
              }
              <img src={usc_logo} width="200" height="50"></img>
            </MDBContainer>
          </div>
        </MDBFooter>
      </React.Fragment>
    );
  }
}

export default HomeData;
