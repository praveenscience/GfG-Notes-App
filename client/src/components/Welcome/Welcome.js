import React, { Component } from "react";
import List from "./List";
import WelcomeHeader from "./WelcomeHeader";

class Welcome extends Component {
  state = {
    Notes: ["Note 1", "Note 2", "Note 3"],
    CurrentNote: null
  };
  setCurrentNote = CurrentNote => {
    this.setState({ CurrentNote });
  };
  render() {
    const { User, handleLogout } = this.props;
    return (
      <div className="container">
        <WelcomeHeader User={User} handleLogout={handleLogout} />
        <div className="row mt-3">
          <div className="col-3">
            <List
              Notes={this.state.Notes}
              CurrentNote={this.state.CurrentNote}
              setCurrentNote={this.setCurrentNote}
            />
          </div>
          <div className="col-9">Right Window</div>
        </div>
      </div>
    );
  }
}
export default Welcome;
