import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjZkYTNjZjgzNDMyZmI3ZWY3YzE1YWZhYmEyNmM2ZSIsIm5iZiI6MTc1NTEyOTA0Mi43MDMsInN1YiI6IjY4OWQyNGQyZWRlNzAxZGQzM2I3MTA3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WLKEO2k3qD2grrTOXy5ExPhf7raTTYGlJ2yLuw--GP8",
  },
});

export default instance;
