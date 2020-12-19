import React, { Component } from "react";
import { AuthUser } from "../services/User";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";

export default class App extends Component {
  state = {
    User: null,
    Error: null
  };
  handleAuth = (username, password) => {
    AuthUser(username, password)
      .then(res => {
        this.setState({
          User: res.data.Message,
          Error: null
        });
      })
      .catch(error => {
        this.setState({
          User: null,
          Error: error.response.data.Message
        });
      });
  };
  handleLogout = e => {
    e.preventDefault();
    this.setState({ User: null });
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
        {this.state.User ? (
          <Welcome User={this.state.User} handleLogout={this.handleLogout} />
        ) : (
          <Login handleAuth={this.handleAuth} Error={this.state.Error} />
        )}
      </div>
    );
  }
}
