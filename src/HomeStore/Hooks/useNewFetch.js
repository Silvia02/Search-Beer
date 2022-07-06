import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";


//Hooks are reusable functions. Custom Hooks start with "use".
//When you have component logic that needs to be used by multiple components,

//useFetch which contains all of the logic needed to fetch my data.
function useFetch(query, page) {
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]); // Initialize state to hold the beers
  const [noResult, setNoResult] = useState(false);

  const getData = useCallback(() => {
    setIsLoading(true);

    axios
      .get(
        `https://api.punkapi.com/v2/beers/?page=${page}&per_page=10&beer_name=${query}`
      )
      .then((res) => {
        const result = res.data;
        console.log(result);
        if (result.length === 0) setNoResult(true);

        setBeers((prev) => [...prev, ...result]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err + "error");
      });

    console.log("useEffect ran...");
  }, [query, page]);
  
  useEffect(() => {
    console.log("render");
    setBeers([]);
  }, [query, page]); //dependencies

  return { isLoading, beers, getData, noResult }; //
}

export default useFetch;
