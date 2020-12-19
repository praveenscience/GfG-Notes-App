import Axios from "axios";

export const CheckUser = () => Axios.get("/api/user");

export const AuthUser = (username, password) =>
  Axios.post("/api/user/login", { username, password });

export const RegUser = (username, password) =>
  Axios.post("/api/user/register", { username, password });

export const LogoutUser = () => Axios.post("/api/user/logout");
