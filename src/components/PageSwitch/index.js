import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import About from "./../About";
import Header from "../Header";
import PostDetail from "./../PostDetail";
import Category from "../Category";
import CategoryPost from "../Category/CateogryPost";

class PageSwitch extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Header
              background="assets/img/home-bg.jpg"
              title="BlogMT-javascript "
              content=""
            />
            <Home />
          </Route>
          <Route exact path="/about">
            <Header
              background="assets/img/about.jpg"
              title="About me"
              content=""
            />
            <About />
          </Route>
          <Route exact path="/category">
            <Category />
          </Route>
          <Route path="/category/:slug">
            <CategoryPost />
          </Route>
          <Route path="/post/:slug">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default PageSwitch;
