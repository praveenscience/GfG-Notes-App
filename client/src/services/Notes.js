import Axios from "axios";
export const GetNotes = () => Axios.get("/api/note");
