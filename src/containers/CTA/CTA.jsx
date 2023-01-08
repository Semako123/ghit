import React from "react";
import "./cta.css";
import { Button } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CTA = () => {
  return (
    <AnimationOnScroll animateIn="animate__heartBeat" animateOut="animate__fadeOut">
      <div className="ghit__cta section__padding" id="cta">
        <div className="ghit__cta-content">
          <p>
            Let's cooperate to make the younger generation global champions.
          </p>
          <h6>Register today & be part of the digital revolution</h6>
        </div>

        <Button>Learn More</Button>
      </div>
    </AnimationOnScroll>
  );
};

export default CTA;
