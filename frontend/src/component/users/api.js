import api from "../../shared/api";

export const getAllUsers = () => api.get("/users");
