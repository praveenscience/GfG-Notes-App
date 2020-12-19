import React from "react";
import { Switch, Route } from "react-router-dom";
import NewNote from "./_NewNote";
import NoteContent from "./_NoteContent";
import NoteWelcome from "./_NoteWelcome";

const Note = ({ User, Notes, RefreshNotes }) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={NoteWelcome} />
      <Route
        path="/new"
        render={rp => (
          <NewNote {...rp} User={User} RefreshNotes={RefreshNotes} />
        )}
      />
      <Route
        path="/:NoteID"
        render={rp => <NoteContent {...rp} Notes={Notes} />}
      />
    </Switch>
  );
};

export default Note;
