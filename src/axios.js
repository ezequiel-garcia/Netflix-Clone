import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//If we do instance.get('/foo-bar');
//is like send https://api.themoviedb.org/3/foo-bar

export default instance;
