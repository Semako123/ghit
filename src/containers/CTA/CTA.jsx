import React from "react";
import "./cta.css";
import { Button } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate()
  return (
    <AnimationOnScroll animateIn="animate__heartBeat" animateOut="animate__fadeOut">
      <div className="ghit__cta section__padding" id="cta">
        <div className="ghit__cta-content">
          <p>
            Let's cooperate to make the younger generation global champions.
          </p>
          <h6>Register today & be part of the digital revolution</h6>
        </div>

        <Button onClick={() => navigate("/partnership")}>Learn More</Button>
      </div>
    </AnimationOnScroll>
  );
};

export default CTA;
