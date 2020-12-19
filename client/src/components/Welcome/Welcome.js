import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Note from "./Note";
import WelcomeHeader from "./WelcomeHeader";

class Welcome extends Component {
  state = {
    Notes: []
  };
  render() {
    const { User, handleLogout } = this.props;
    return (
      <div className="container">
        <WelcomeHeader User={User} handleLogout={handleLogout} />
        <div className="row mt-3">
          <Route path={["/:NoteID", "/"]}>
            <div className="col-3">
              <List Notes={this.state.Notes} />
            </div>
            <div className="col-9">
              <Note Notes={this.state.Notes} />
            </div>
          </Route>
        </div>
      </div>
    );
  }
}
export default Welcome;
