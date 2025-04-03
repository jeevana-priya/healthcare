import axios from "axios";

export const register = async (userData) => {
  return await axios.post("http://localhost:5000/api/auth/register", userData);
};

export const login = async (credentials) => {
  return await axios.post("http://localhost:5000/api/auth/login", credentials);
};