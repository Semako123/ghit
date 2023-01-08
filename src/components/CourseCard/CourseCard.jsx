import React from "react";
import "./courseCard.css";

const CourseCard = ({ img, title, category, duration }) => {
  return (
    <div className="ghit__courseCard">
      <img src={img} />
      <div className="ghit__courseCard-content">
        <h4>{title}</h4>
        <p>Category: {category}</p>
        <p>Duration: {duration} weeks</p>
      </div>
    </div>
  );
};

export default CourseCard;
