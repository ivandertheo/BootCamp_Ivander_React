import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const fetchUsers = () => axios.get(API_URL);
export const createUser = (data) => axios.post(API_URL, data);