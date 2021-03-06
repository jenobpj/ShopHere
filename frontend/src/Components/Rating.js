import React from "react";

const Rating = ({ value, text, starcolor = "#f8e825" }) => {
  const stars = [1, 2, 3, 4, 5].map((index) => (
    <i
      style={{ color: starcolor }}
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
      <span>{stars}</span> <span>{text && text}</span>
    </div>
  );
};

export default Rating;
