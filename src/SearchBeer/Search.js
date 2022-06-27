import React, { useState, useEffect } from "react";
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
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading, beers, error } = useFetch(query, page);

  const handleChange = (e) => {
    setQuery(e.target.value);
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
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load More
        </Button>
      </Form>
      <Item>
        {beers.length > 0 ? (
          beers.map((b) => (
            <div key={b.id}>
              <BeerList filters={b} />
            </div>
          ))
        ) : (
          <div>
            <i>No beer found...</i>
          </div>
        )}
      </Item>
    </div>
  );
};
export default Search;
