import React from "react";

const Rating = ({ value, text }) => {
  const stars = [1, 2, 3, 4, 5].map((index) => (
    <i
      key={index}
      className={
        value >= index
          ? "fas fa-star"
          : value === index - 0.5
          ? "fas fa-star-half-alt"
          : "far fa-star"
      }
    ></i>
  ));

  return (
    <div className="rating">
      <span>{stars}</span> <span>{text}</span>
    </div>
  );
};

export default Rating;
