import api from "../../shared/api";

export const getAllUsers = () => api.get("/users");

export const addUser = (user) => api.post("/users", user);
