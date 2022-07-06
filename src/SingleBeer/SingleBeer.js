import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { Button, Title, Div, List, ListItem } from "./Styles";
import { Card, Image, Grid } from "semantic-ui-react";

const SingleBeer = () => {
  const [singleBeer, setSingleBeer] = useState([]);
  let { id } = useParams();
  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((response) => {
        const myBeers = response.data;
        setSingleBeer(myBeers);
        console.log(myBeers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Link to={`/beers/${search}`}>Go back</Link>
      <Grid className="ui centered card">
        {singleBeer.map((element) => {
          return (
            <>
              <Card>
                <div key={element.id}>
                  <Image
                    src={element.image_url}
                    size="small"
                    wrapped
                    className="ui centered image"
                  />

                  <h2>{element.name}</h2>

                  <strong>
                    Alcohol content: <p>{element.abv}</p>
                  </strong>

                  <strong>Description</strong>
                  <p>{element.description}</p>
                  <Title>Fits perfectly with:</Title>
                </div>
                {element.food_pairing.map((food, index) => {
                  //nested loop
                  return (
                    <Div>
                      <List as="ul" key={index}>
                        <ListItem as="li">{food}</ListItem>
                      </List>
                    </Div>
                  );
                })}
              </Card>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default SingleBeer;
