import React from "react";
import "./pcard.css";
import { Button } from "../../components";

const PCard = ({title, children}) => {
  return (
    <div className="ghit__pcard">
      <div className="ghit__pcard-content">
        <h4>{title}</h4>
        <p>
         {children}
        </p>
      </div>
        <Button>Join Now</Button>
    </div>
  );
};

export default PCard;
