import React, { Component } from "react";
import NavBar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeData from "./home_data";
import About from "./about";
import Videos from "./videos";
import Blog from "./blog";
class Home extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/react-gh-pages/home" exact component={HomeData}></Route>
          <Route path="/react-gh-pages/about" exact component={About}></Route>
          <Route path="/react-gh-pages/videos" exact component={Videos}></Route>
          <Route path="/react-gh-pages/blog" exact component={Blog}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Home;
