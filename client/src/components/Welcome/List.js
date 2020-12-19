import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const List = ({ Notes, match, User }) => {
  const [Filter, setFilter] = useState("All");
  const Filters = ["All", "My Notes"];
  const handleFilter = e => {
    e.preventDefault();
    setFilter(e.target.innerHTML.trim());
  };
  return (
    <>
      <h3 className="mb-3">Notes List</h3>
      <div className="btn-group d-flex mb-3">
        {Filters.map((btn, key) => (
          <button
            className={
              "btn btn-" + (Filter === btn ? "primary" : "outline-secondary")
            }
            key={key}
            onClick={handleFilter}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="list-group">
        {Notes.filter(note => {
          if (Filter === "My Notes") {
            return note.User === User.Name;
          } else {
            return true;
          }
        }).map((note, key) => (
          <Link
            to={"/" + note.NoteID}
            className={
              "list-group-item list-group-item-action" +
              (match.params.NoteID && note.NoteID === match.params.NoteID
                ? " active"
                : "")
            }
            key={key}
          >
            {note.Title}
          </Link>
        ))}
        {Notes.length === 0 && (
          <span className="list-group-item">
            No notes found! Feel free to add one!
          </span>
        )}
      </div>
    </>
  );
};

export default withRouter(List);
