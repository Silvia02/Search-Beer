import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Grid, Image, Card } from "semantic-ui-react";

// Geting a prop from the parent component to display data.
const BeerList = ({ filters }) => {
  return (
    <Grid class="ui container center aligned">
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
