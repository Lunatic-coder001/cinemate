import React, { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTIxMzk1M2E0YTIwZWEyY2MyYTA5MjJiMThhYjk4YSIsIm5iZiI6MTc0MTA2NDAzMC42NDEsInN1YiI6IjY3YzY4NzVlMDljZTRmMzUxNDkwNzY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EhiLSGqBq-wQ6WIRVMFnJNDDZYJz5YZp--wBO9pOR9o",
        },
      };

      const response = await fetch(url, options);
      const json = await response.json();
      console.log("json", json);
      setData(json?.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
