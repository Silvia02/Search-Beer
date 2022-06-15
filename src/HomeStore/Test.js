/***

import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
    const [beer, setBeer] = useState([]);
    const [page, setPage] = useState(0);

  useEffect(() => {
      LoadData();
      window.addEventListener("scroll", handleScroll);
  }, []);

  const LoadData = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers/?page=${page}&per_page=10`)
      .then((response) => {
        console.log(response.data);
        const newBeer = [];
        response.data.forEach((b) => newBeer.push(b));
        setBeer(newdata => [...newdata, ...newBeer]);
      })
      .catch((err) => {
        let message =
          typeof err.response !== "undefined"
            ? err.response.data.message
            : err.message;
        console.warn("error", message);
      });
      setPage(page + 10);
  };
    
    
    
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElemet.scrollTop + 1 >=
      e.target.documentElemet.scrollHeight
    ) {
        LoadData();
      console.log("hi at the bottom");
    }
  };

  return (
    <>
      {beer &&
        beer.map((b) => {
          return <p>{b.name}</p>;
        })}
    </>
  );
};

export default Test;
* */