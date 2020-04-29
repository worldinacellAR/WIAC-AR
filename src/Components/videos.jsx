import React, { Component } from "react";
import usc_logo from "../Files/usc_games.png";
import bg_gradient from "../Files/angryimg.png";
import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";
import "../CSS/videos.css";
import { Card } from "react-bootstrap";

class Videos extends Component {
  state = {};
  render() {
    return (
      <div className="bg_img_videos">
        <Card
          style={{
            textAlign: "center",
            backgroundImage: `url(${bg_gradient})`,
            fontFamily: "Nunito Sans",
            fontWeight: "bold",
          }}
        >
          <Card.Title>MEDIA</Card.Title>
        </Card>
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
      </div>
    );
  }
}

export default Videos;
