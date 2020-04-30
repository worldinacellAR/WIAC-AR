import React, { Component } from "react";
import usc_logo from "../Files/usc_games.png";
import bg_gradient from "../Files/angryimg.png";
import { MDBCol, MDBFooter, MDBContainer, MDBRow } from "mdbreact";
import "../CSS/videos.css";
import { CardDeck, Card } from "react-bootstrap";
import video1 from "../Files/oneplayerdemo.mp4";
import trailer_video from "../Files/WIAC_Trailer.mp4";
import Walkthrough_video from "../Files/WIAC_Walkthrough.mp4";

class Videos extends Component {
  state = {
    imgLink1: "https://img.icons8.com/color/48/000000/youtube-play.png",
    imgLink2: "https://img.icons8.com/color/48/000000/youtube-play.png",
    imgLink3: "https://img.icons8.com/color/48/000000/youtube-play.png",
    imgLink4: "https://img.icons8.com/color/48/000000/youtube-play.png",
  };
  playVideo() {
    if (this.refs.vidRef1.paused) {
      this.setState(
        {
          imgLink1: "https://img.icons8.com/color/48/000000/pause-squared.png",
        },
        () => {
          this.refs.vidRef1.play();
        }
      );
    } else {
      this.setState(
        {
          imgLink1: "https://img.icons8.com/color/48/000000/youtube-play.png",
        },
        () => {
          this.refs.vidRef1.pause();
        }
      );
    }
  }
  playVideo2() {
    if (this.refs.vidRef2.paused) {
      this.setState(
        {
          imgLink2: "https://img.icons8.com/color/48/000000/pause-squared.png",
        },
        () => {
          this.refs.vidRef2.play();
        }
      );
    } else {
      this.setState(
        {
          imgLink2: "https://img.icons8.com/color/48/000000/youtube-play.png",
        },
        () => {
          this.refs.vidRef2.pause();
        }
      );
    }
  }
  // playVideo3() {
  //   if (this.refs.vidRef3.paused) {
  //     this.setState(
  //       {
  //         imgLink3: "https://img.icons8.com/color/48/000000/pause-squared.png",
  //       },
  //       () => {
  //         this.refs.vidRef3.play();
  //       }
  //     );
  //   } else {
  //     this.setState(
  //       {
  //         imgLink3: "https://img.icons8.com/color/48/000000/youtube-play.png",
  //       },
  //       () => {
  //         this.refs.vidRef3.pause();
  //       }
  //     );
  //   }
  // }
  // playVideo4() {
  //   if (this.refs.vidRef4.paused) {
  //     this.setState(
  //       {
  //         imgLink4: "https://img.icons8.com/color/48/000000/pause-squared.png",
  //       },
  //       () => {
  //         this.refs.vidRef4.play();
  //       }
  //     );
  //   } else {
  //     this.setState(
  //       {
  //         imgLink4: "https://img.icons8.com/color/48/000000/youtube-play.png",
  //       },
  //       () => {
  //         this.refs.vidRef4.pause();
  //       }
  //     );
  //   }
  // }
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
          <Card.Title style={{ marginTop: "1%" }}>MEDIA</Card.Title>
        </Card>
        <CardDeck style={{ margin: "1rem" }}>
          <Card>
            <Card.Header
              style={{
                textAlign: "center",
                fontFamily: "Nunito Sans",
                fontWeight: "bolder",
                fontVariantCaps: "small-caps",
                fontSize: "2rem",
              }}
            >
              Trailer
            </Card.Header>
            <div className="wrapper">
              <video ref="vidRef1" width="100%" loop>
                <source src={trailer_video} type="video/mp4" />
              </video>
              <div
                style={{
                  cursor: "pointer",
                  backgroundImage: `url(${this.state.imgLink1})`,
                }}
                onClick={this.playVideo.bind(this)}
                className="playpause_videos"
              />
            </div>
          </Card>
          <Card>
            <Card.Header
              style={{
                textAlign: "center",
                fontFamily: "Nunito Sans",
                fontWeight: "bolder",
                fontVariantCaps: "small-caps",
                fontSize: "2rem",
              }}
            >
              Walkthrough
            </Card.Header>
            <div className="wrapper">
              <video ref="vidRef2" width="100%" loop>
                <source src={Walkthrough_video} type="video/mp4" />
              </video>
              <div
                style={{
                  cursor: "pointer",
                  backgroundImage: `url(${this.state.imgLink2})`,
                }}
                onClick={this.playVideo2.bind(this)}
                className="playpause_videos"
              />
            </div>
          </Card>
        </CardDeck>
        <MDBFooter
          style={{
            background: "#fff",
            position: "fixed",
            bottom: "0%",
            right: "32%",
          }}
          className="font-small"
        >
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
        {/* <CardDeck style={{ margin: "1rem" }}>
          <Card>
            <div className="wrapper">
              <video ref="vidRef3" width="100%" loop muted>
                <source src={video1} type="video/mp4" />
              </video>
              <div
                style={{
                  cursor: "pointer",
                  backgroundImage: `url(${this.state.imgLink3})`,
                }}
                onClick={this.playVideo3.bind(this)}
                className="playpause_videos"
              />
            </div>
          </Card>
          <Card>
            <div className="wrapper">
              <video ref="vidRef4" width="100%" loop muted>
                <source src={video1} type="video/mp4" />
              </video>
              <div
                style={{
                  cursor: "pointer",
                  backgroundImage: `url(${this.state.imgLink4})`,
                }}
                onClick={this.playVideo4.bind(this)}
                className="playpause_videos"
              />
            </div>
          </Card>
        </CardDeck> */}
      </div>
    );
  }
}

export default Videos;
