import React from "react";
import './Styles.css'
import { Link } from "react-router-dom";
import { Grid, Image, Card } from "semantic-ui-react";

const Search = ({ filters }) => {
  return (
    <Grid >
      <Card >
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

export default Search;
