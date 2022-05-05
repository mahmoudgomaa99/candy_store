import axios from "axios";

const signIn = (data: any) => axios.post("/v1/users/login", data);
const signUp = (data: any) => axios.post("/v1/users/", data);
const getCurrentUser = () => axios.get("/v1/users/");

const UserAPI = {
  signIn,
  signUp,
  getCurrentUser,
};

export default UserAPI;
