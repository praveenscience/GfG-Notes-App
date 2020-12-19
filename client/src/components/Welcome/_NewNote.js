import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Sluggify } from "../../helpers/Helpers";

const NewNote = ({ User }) => {
  User = User.Name;
  const [Desc, setDesc] = useState("");
  const [Title, setTitle] = useState("");
  const NoteID = Sluggify(Title);
  const handleSubmit = e => {
    e.preventDefault();
    console.log({ NoteID, Desc, Title, User });
  };
  const handleReset = e => {
    e.preventDefault();
    setDesc("");
    setTitle("");
  };
  return (
    <form className="NewNote" onSubmit={handleSubmit} onReset={handleReset}>
      <h3 className="mb-3">
        Creating
        <input
          type="text"
          placeholder="Enter title here..."
          value={Title}
          onChange={e => setTitle(e.target.value)}
        />
      </h3>
      <p>
        <em>Being created by {User}...</em>
      </p>
      <MDEditor
        height={window.innerHeight - 350}
        value={Desc}
        onChange={setDesc}
      />
      <input
        type="submit"
        value="Create Note"
        className="btn btn-primary mt-3"
      />
      <input
        type="reset"
        value="Reset"
        className="btn btn-outline-secondary mt-3 ml-3"
      />
    </form>
  );
};

export default NewNote;
