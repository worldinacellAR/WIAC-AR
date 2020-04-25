import React, { Component } from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import BgImage from "../Files/WIAC00.jpg";
import holoicon from "../Files/holo.png";
import "../CSS/home_Data.css";
import vr_icon from "../Files/vr_icon.png";
import Bg2 from "../Files/WIAC03.jpg";
import usc_logo from "../Files/usc_games.png";

import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";

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
            <Card.Text className="card_title">WIAC - AR</Card.Text>
            <Card.Text style={{ margin: "1rem" }} className="card_text">
              Hello, this is our project
            </Card.Text>
            <Button variant="success">Watch Trailer</Button>
            <Button style={{ marginLeft: "1.5rem" }} variant="primary">
              Learn more
            </Button>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Bg2})` }}>
          <CardDeck
            style={{
              margin: "1% 1% 1% 10%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Card
              border="light"
              bg="light"
              text="dark"
              className="col-md-3"
              border="light"
            >
              <Card.Img variant="top" src={vr_icon} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{ borderRadius: "0.5rem" }}
              border="light"
              bg="ligh"
              text="dark"
              className="col-md-3"
              border="light"
            >
              <Card.Img variant="top" src={holoicon} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <MDBFooter className="font-small">
          <MDBContainer fluid className="text-center"></MDBContainer>
          <div className="footer-copyright text-center">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:
              {
                "Spring 2020 : Augmented, Mixed and Virtual reality class - World in a Cell Augmented Reality team"
              }
              <img src={usc_logo} width="300" height="70"></img>
            </MDBContainer>
          </div>
        </MDBFooter>
      </React.Fragment>
    );
  }
}

export default HomeData;
