import React from "react";

const Product = ({ Title, Poster }) => {
  return (
    <div className="movie">
      <img src={Poster} />
      <div className="movie-info">
        <h3>{Title}</h3>
        <button type="button">Details</button>
      </div>
    </div>
  );
};

export default Product;

