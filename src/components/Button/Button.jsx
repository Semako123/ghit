import React from "react";
import "./button.css";

const Button = ({ children, onClick }) => {
  return (
    <div className="ghit__button" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
