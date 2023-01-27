import React from "react";
import "./perks.css";

const Perks = ({ title, children }) => {
  return (
    <div className="ghit__perks">
      <div className="ghit__perks-deco"></div>
      <h4>{title}</h4>
      <p>{children}.</p>
    </div>
  );
};

export default Perks;
