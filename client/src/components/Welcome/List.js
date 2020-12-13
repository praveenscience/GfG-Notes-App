import React from "react";
import { Link, withRouter } from "react-router-dom";

const List = ({ Notes }) => (
  <>
    <h3>Notes List</h3>
    <div className="list-group">
      {Notes.map((item, key) => (
        <Link
          to={"/note-" + key}
          className={
            "list-group-item list-group-item-action" + (false ? " active" : "")
          }
          key={key}
        >
          {item}
        </Link>
      ))}
    </div>
  </>
);

export default withRouter(List);
