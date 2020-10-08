import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:9000",
  baseURL: "https://mern-messenger-yj.herokuapp.com",
});

export default instance;
