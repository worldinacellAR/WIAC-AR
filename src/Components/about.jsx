import React, { Component } from "react";
import { Card, ListGroup, Carousel } from "react-bootstrap";
import "../CSS/about.css";
import hololens_logo from "../Files/hololens.png"; // with import
import unity_logo from "../Files/unity.png";
import vs_logo from "../Files/vs.png";
import BgImage from "../Files/WIAC00.jpg";
import v4 from "../Files/v4.2.png";
import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";
import usc_logo from "../Files/usc_games.png";
import bg_gradient from "../Files/angryimg.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="bg_img_about">
        <Card
          style={{
            textAlign: "center",
            backgroundImage: `url(${bg_gradient})`,
            fontFamily: "Nunito Sans",
            fontWeight: "bold",
          }}
        >
          <Card.Title style={{ marginTop: "1%" }}>ABOUT</Card.Title>
        </Card>
        <Card
          style={{
            marginTop: "0.5rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Project Description
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              This project extends the existing work done by the World in a Cell
              team, which is a collaboration between the USC Bridge Institute at
              the Michelson Center for Convergent Biosciences, the World
              Building Media Lab at USC, and the Practice division of Cinematic
              Arts. As it stands, the project is a virtual reality experience
              that runs on the HTC Vive headset and guides the user through a
              Pancreatic Beta Cell, allowing him/her to explore various
              functions of the cell by engaging with different cell constituents
              and receiving audiovisual feedback. The goal is to complement the
              VR application by building a mixed reality experience that offers
              a hands on alternative and a closer look at how proteins interact.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Objective
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_font">
              The goal is for players to learn which constituents can be
              combined like a symphony conductor by using sound feedback.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">Rules</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="card_font">
              &#x25FD; At the start of the experience, the constituents will
              fall from the sky and bounce like a balloon where players can tap
              the constituents into the cylindrical playspace.
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              &#x25FD; There are 10 constituents and 3 groups. Each constituent
              will interact with another and produce its own sound. When
              constituents collide, they will produce a positive sound if they
              are from the same group otherwise it will be negative.
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              &#x25FD; If they are from the same group, they will bind and the
              collection of sounds will be harmonious within its own group. For
              example, GLP1, GLP1R, and G Protein together will sound
              harmonious. GLP1 and PKA will produce a discordant sound.
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">
            Technologies Used
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="card_font">
              <img
                width="50"
                height="50"
                src={hololens_logo}
                align="right"
              ></img>
              Microsoft HoloLens (1st gen) is a mixed reality smart glasses.
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              <img width="50" height="50" src={unity_logo} align="right"></img>
              Unity3D is a cross-platform game engine in which the app was
              designed
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              <img width="50" height="50" src={vs_logo} align="right"></img>
              Microsoft Visual Studio is a platform to deploy the app onto the
              HoloLens.
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card
          style={{
            marginTop: "1rem",
            marginLeft: "18rem",
            marginRight: "18rem",
            marginBottom: "1rem",
          }}
          bg="light"
          text="dark"
          border="secondary"
        >
          <Card.Header className="card_title text-danger">The Team</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="card_font">
              Abishek Narayanan
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              Varinthorn Bulakul
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              Mishari Aliesa
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              Niveditha Kumaran
            </ListGroup.Item>
            <ListGroup.Item className="card_font">
              Sharvari Deshpande
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <MDBFooter style={{ background: "#fff" }} className="font-small">
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
      </div>
    );
  }
}

export default About;
