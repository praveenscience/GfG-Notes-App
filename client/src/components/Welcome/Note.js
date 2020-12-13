import React from "react";

const Note = ({ CurrentNote }) => {
  return CurrentNote !== null
    ? "You're looking at Note #" + (CurrentNote + 1)
    : "Click on a note from left side.";
};

export default Note;
