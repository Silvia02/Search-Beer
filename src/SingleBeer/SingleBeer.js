import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Section, Title, Wrapper, Div, List, ListItem } from "./Styles";

const SingleBeer = () => {
  const [singleBeer, setSingleBeer] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

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
    <Section>
      <Button onClick={() => navigate(-1)}>Go back</Button>

      {singleBeer.map((element) => {
        return (
          <>
            <img src={element.image_url} size="medium" wrapped ui={false} />

            <p key={element.id}>
              <Title>{element.name}</Title>

              <strong>Alcohol content: </strong>
              {element.abv}

              <strong>Description</strong>
              <p>{element.description}</p>
              <Title>Fits perfectly with:</Title>
            </p>
            {element.food_pairing.map((food, index) => {
              return (
                <Div>
                  <List as="ul" key={index}>
                    <ListItem as="li">{food}</ListItem>
                  </List>
                </Div>
              );
            })}
          </>
        );
      })}
    </Section>
  );
};

export default SingleBeer;
