import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Input, Button, Card, Item, Grid } from "semantic-ui-react";
import Search from "../SearchBeer/Search";
import useInfiniteScroll from "../HomeStore/Hooks/useInfiniteScroll";
import useFetch from "../HomeStore/Hooks/useFetch";

const filterBeer = () => {
  const { loadMoreRef, page } = useInfiniteScroll();
  const { loading, beers } = useFetch(page);
  const [beer, setBeer] = useState([]);
  const [query, setQuery] = useState("");

  const getMoreData = () => {
    axios
      .get(
        `https://api.punkapi.com/v2/beers/?page=1&per_page=10&beer_name=${query}`
      )
      .then((resp) => {
        const resultData = resp.data;
        setBeer(resultData);
        console.log(resultData);
      })
      .catch((err) => {
        let message =
          typeof err.response !== "undefined"
            ? err.response.data.message
            : err.message;
        console.warn("error", message);
      });
  };

  // if query is empty return
  useEffect(() => {
    if (query === "") {
      return;
    }
    getMoreData();
  }, [query, beers]);

  return (
    <>
      <Container>
        <Input className="test">
          <input
            className="inputsearch"
            size="large"
            type="text"
            data-testid="my-input"
            name="query"
            value={query}
            placeholder="Search Beer"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={getMoreData}>Search</Button>
        </Input>
        {beer.length > 0 ? (
          <>
            <div className="container">
              {beer && beer.map((beer) => <Search filters={beer} />)}
            </div>
          </>
        ) : (
          <div>
            <i>No beer found...</i>
          </div>
        )}
        <div ref={loadMoreRef}>{loading && <p>Loading...</p>}</div>
      </Container>
    </>
  );
};

export default filterBeer;
