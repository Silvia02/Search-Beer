import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Input,
  Button,
  Card,
  Item,
  Grid,
  Form,
} from "semantic-ui-react";
import BeerList from "./BeerList";
import useFetch from "../HomeStore/Hooks/useNewFetch";

const Search = () => {
  const [query, setQuery] = useState([""]);
  const [page, setPage] = useState(1);
  const { isLoading, beers, error, getData } = useFetch(query, page);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    getData(setPage(page + 1)); 
    
  };

  return (
    <div className="App">
      <Form>
        <Input
          value={query}
          type="text"
          placeholder="Search beers"
          name="query"
          onChange={handleChange}
        />
        <Button onClick={getData}>Search</Button>
        <Button onClick={handleClick}>Load More</Button>
      </Form>
      <Item>
        {beers.map((b) => {
          return (
            <div key={b.id}>
              <BeerList filters={b} />
            </div>
          );
        })}
      </Item>
    </div>
  );
};
export default Search;
