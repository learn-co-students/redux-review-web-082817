import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import MovieContainer from "./containers/MovieContainer";
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/movies" component={MovieContainer} />
      </div>
    );
  }
}

export default App;
