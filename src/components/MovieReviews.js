// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  
  const render = () => {
    
    return props.reviews.map((review) => (
      <div className="review">
        <h1>{movieReview.display_title}</h1>
      </div>
    ));
  };
  return <div className="review-list">{render()}</div>;
};

export default MovieReviews;