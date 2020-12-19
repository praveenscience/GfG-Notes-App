import React, { Component } from "react";
import { Route } from "react-router-dom";
import { GetNotes } from "../../services/Notes";
import List from "./List";
import Note from "./Note";
import WelcomeHeader from "./WelcomeHeader";

class Welcome extends Component {
  state = {
    Notes: []
  };
  RefreshNotes = () => {
    GetNotes().then(res => {
      this.setState({
        Notes: res.data
      });
    });
  };
  componentDidMount() {
    this.RefreshNotes();
  }
  render() {
    const { User, handleLogout } = this.props;
    return (
      <div className="container">
        <WelcomeHeader User={User} handleLogout={handleLogout} />
        <div className="row mt-3">
          <Route path={["/:NoteID", "/"]}>
            <div className="col-3">
              <List Notes={this.state.Notes} User={User} />
            </div>
            <div className="col-9">
              <Note
                Notes={this.state.Notes}
                User={User}
                RefreshNotes={this.RefreshNotes}
              />
            </div>
          </Route>
        </div>
      </div>
    );
  }
}
export default Welcome;
