import Axios from "axios";

export const GetNotes = () => Axios.get("/api/note");

export const CreateNote = (NoteID, Desc, Title, User) =>
  Axios.post("/api/note", { NoteID, Desc, Title, User });
