import React, { useState, useEffect } from "react";
import axios from "axios";

//Hooks are reusable functions. Custom Hooks start with "use".
//When you have component logic that needs to be used by multiple components,

//useFetch which contains all of the logic needed to fetch our data.
function useFetch(query, page) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [beers, setBeers] = useState([]); // Initialize state to hold the beers

  useEffect(() => {
    console.log("render");
    setBeers([]);
  }, [query, page]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    axios
      .get(
        `https://api.punkapi.com/v2/beers/?page=${page}&per_page=10&beer_name=${query}`
      )
      .then((res) => {
        const result = res.data;
        console.log(result);

        setBeers((prev) => [...prev, ...result]);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err + "error");
      });
  }, [query, page]);

  return { isLoading, error, beers };
}

export default useFetch;
