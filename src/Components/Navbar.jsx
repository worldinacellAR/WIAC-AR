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
        <Nav className="ml-auto">
          <Link to="/react-gh-pages">
            <Nav
              style={{ color: "#fff", margin: "1rem" }}
              className="navlinks"
              href="#home"
            >
              Home
            </Nav>
          </Link>

          <Link to="/about">
            <Nav
              style={{ color: "#fff", margin: "1rem" }}
              className="navlinks"
              href="#about"
            >
              About
            </Nav>
          </Link>
          <Link to="/videos">
            <Nav
              style={{ color: "#fff", margin: "1rem" }}
              className="navlinks"
              href="#videos"
            >
              Videos
            </Nav>
          </Link>

          <Link to="/blog">
            <Nav
              style={{ color: "#fff", margin: "1rem" }}
              className="navlinks"
              href="#blog"
            >
              Blog
            </Nav>
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
