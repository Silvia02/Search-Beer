import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Grid, Image, Card } from "semantic-ui-react";

// Getting a prop from parent component to display data.
const BeerList = ({ filters }) => {
  return (
    <Grid className="ui centered card">
      <Card>
        <h3>{filters.name}</h3>
        <br />
        <strong>Alcohol content: {filters.abv}</strong>
        <br />

        <Link to={`/beers/${filters["id"]}`}>
          <Image
            src={filters.image_url}
            alt={filters.name}
            size="small"
            centered
          />
        </Link>
      </Card>
    </Grid>
  );
};

export default BeerList;
