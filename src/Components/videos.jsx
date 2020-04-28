import React, { Component } from "react";
import usc_logo from "../Files/usc_games.png";
import bg_gradient from "../Files/angryimg.png";
import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";

class Videos extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>videos</h1>
        <MDBFooter className="font-small">
          <MDBContainer fluid className="text-center"></MDBContainer>
          <div
            style={{ backgroundImage: `url(${bg_gradient})` }}
            className="footer-copyright text-center bg_footer"
          >
            <MDBContainer fluid>
              <br />
              &copy; {new Date().getFullYear()}
              {
                "Spring 2020 CSCI 538 Augmented, Virtual, and Mixed Reality - World in a Cell Augmented Reality team"
              }
              <img src={usc_logo} width="200" height="50"></img>
            </MDBContainer>
          </div>
        </MDBFooter>
      </React.Fragment>
    );
  }
}

export default Videos;
