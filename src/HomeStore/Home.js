import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "../HomeStore/Home.css";
import axios from "axios";
import { Container, Input, Button, Image, Card, Item } from "semantic-ui-react";
import useInfiniteScroll from "@closeio/use-infinite-scroll";
import Search from "../SearchBeer/Search";

// This is my parent component
const Home = () => {
  const [allBeer, setallBeer] = useState([]); // get beers
  const [searCh, setSearch] = useState(""); //get the result from input first state
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const getData = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers/?per_page=10`)
      .then((resp) => {
        const resultData = resp.data;
        console.log(resultData);
        setallBeer(resultData);
      })
      .catch((err) => {
        let message =
          typeof err.response !== "undefined"
            ? err.response.data.message
            : err.message;
        console.warn("error", message);
      });
  };

  const loadMoreData = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers/?page=${page}&per_page=10`)
      .then((resp) => {
        const resultData = resp.data;
        setallBeer([...allBeer, ...resultData]);
        const result = allBeer.filter((beer) => {
          return beer.name.toLowerCase().includes(searCh.toLowerCase());
        });
        setallBeer(result);
        setIsFetching(false);
        setPage(page + 1);
      })
      .catch((err) => {
        let message =
          typeof err.response !== "undefined"
            ? err.response.data.message
            : err.message;
        console.warn("error", message);
      });
  };

  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setIsFetching(true);
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (isFetching) {
      loadMoreData();
    }
  }, [isFetching, searCh]);

  return (
    <>
      <Input className="test">
        <input
          className="inputsearch"
          size="large"
          type="text"
          name="searCh"
          placeholder="Search Beer"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <Button onClick={loadMoreData}>Search</Button>
      </Input>
      <Item.Group>
        <Container className="container" textAlign="center">
          {allBeer.length > 0 ? (
            <Card>
              {allBeer &&
                allBeer.map((item) => {
                  return <Search imageObjects={item} />;
                })}
            </Card>
          ) : (
            <div>
              <i>no beer found</i>
            </div>
          )}
        </Container>
      </Item.Group>
    </>
  );
};

export default Home;
/****
 * 
 * 
 * 
 *  return (
                  <>
                    <Search item={item} />
                    <div key={item.id}>
                      <Card.Header>{item.name}</Card.Header>
                      <Link to={`/beers/${item["id"]}`}>
                        <Image src={item.image_url} wrapped ui={false} />
                      </Link>
                      <Card.Meta>
                        <span className="alcohol">{item.abv}</span>
                      </Card.Meta>
                      <Card.Description>{item.description}</Card.Description>
                    </div>
                  </>
                );
 * 
 * 
 */
