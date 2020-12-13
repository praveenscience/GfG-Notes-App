import React, { Component } from "react";
import FormGroup from "../Forms/FormGroup";

class LoginForm extends Component {
  state = {
    Username: "",
    Password: ""
  };
  handleChange = e => {
    console.log(`${e.target.name}: ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAuth(this.state.Username, this.state.Password);
  };
  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        {this.props.Error && (
          <div className="alert alert-danger">{this.props.Error}</div>
        )}
        {[
          {
            Id: "Username",
            Type: "text",
            Desc: "Put your username in right case."
          },
          {
            Id: "Password",
            Type: "password",
            Desc: "Put your password that you might have forgotten"
          }
        ].map((fg, key) => (
          <FormGroup
            {...fg}
            Value={this.state[fg.Id]}
            Label={fg.Id}
            key={key}
            onChange={this.handleChange}
          />
        ))}
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    );
  }
}

export default LoginForm;
