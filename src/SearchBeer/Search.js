import React from "react";
import "./Styles";
import { Link } from "react-router-dom";

const Search = ({ imageObjects }) => {
  return (
    <div className="test-1">
      <div className="test">
        <h1>Testando</h1>

        <p>{imageObjects.name}</p>
        <Link to={`/beers/${imageObjects["id"]}`}>
          <img src={imageObjects.image_url} alt={imageObjects.name} className="w-100" />
        </Link>

        <p>{imageObjects.id}</p>
      </div>
    </div>
  );
};

export default Search;
