import React, { Component } from "react";
import List from "./List";

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
        <div className="row">
          <div className="col-12">
            <div className="border rounded p-2">
              <p className="mb-1">Welcome, {User.Name}.</p>
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
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
