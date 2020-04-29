import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../CSS/navbarstyle.css";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar
        style={{ alignContents: "right" }}
        sticky="top"
        className="navbar-dark bg-custom-2"
      >
        <Nav
          style={{
            fontFamily: "Nunito-Sans",
            fontSize: "1.5rem",
            color: "#fff",
            margin: "1rem",
          }}
          className="navlinks"
        >
          World in a cell AR
        </Nav>
        <Nav className="ml-auto">
          <Link to="/">
            <Nav style={{ color: "#fff", margin: "1rem" }} className="navlinks">
              Home
            </Nav>
          </Link>

          <Link to="/about">
            <Nav style={{ color: "#fff", margin: "1rem" }} className="navlinks">
              About
            </Nav>
          </Link>
          <Link to="/videos">
            <Nav style={{ color: "#fff", margin: "1rem" }} className="navlinks">
              Media
            </Nav>
          </Link>

          <Link to="/blog">
            <Nav style={{ color: "#fff", margin: "1rem" }} className="navlinks">
              Blog
            </Nav>
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
