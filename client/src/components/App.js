import React, { Component } from "react";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";

export default class App extends Component {
  state = {
    User: null
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
        {this.state.User ? <Welcome /> : <Login />}
      </div>
    );
  }
}
