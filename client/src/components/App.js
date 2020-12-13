import React, { Component } from "react";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";

export default class App extends Component {
  state = {
    User: null,
    Error: null
  };
  handleAuth = (username, password) => {
    const Users = {
      Praveen: "Hello123",
      Bhooshan: "dark456",
      Rishav: "ris2000",
      Shivam: "password",
      Rajan: "rks12345",
      Isabel: "coolcats123",
      Shashi: "akcd@123"
    };
    if (!Users[username]) {
      this.setState({
        User: null,
        Error: "User not found!"
      });
    } else if (Users[username] && Users[username] !== password) {
      this.setState({
        User: null,
        Error: "Wrong Password!"
      });
    } else {
      this.setState({
        User: { Name: username },
        Error: null
      });
    }
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
