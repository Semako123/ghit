import React from "react";
import "./system.css";

const SystemCard = ({ number, title, children, image }) => {
  return (
    <div className="ghit__system-content_section">
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <h4>{number}</h4>
        <div style={{ width: "60%" }}>
          <h5>{title}</h5>
          <p>{children}</p>
        </div>
      </div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};

export default SystemCard;
