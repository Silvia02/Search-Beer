import { useState, useEffect, useCallback } from "react";

function useFetch(page) {
  const [loading, setLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  const getBeers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.punkapi.com/v2/beers/?page=${page}&per_page=10`
      );
      const data = await response.json();
      //console.log(data);
      setBeers((prev) => [...prev, ...data]);

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [page]);

  useEffect(() => {
    getBeers();
  }, [getBeers]);
    
    

  return { loading, beers };
}

export default useFetch;
