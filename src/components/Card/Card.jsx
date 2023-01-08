import React from "react";
import "./card.css";

const Card = ({ text, img }) => {
  return (
    <div className="ghit__card">
      <img src={img} />
      <p>{text}</p>
    </div>
  );
};

export default Card;
