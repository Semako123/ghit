import React from "react";
import "./wwo.css";
import { landing4 } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WWO = () => {
  return (
    <div className="ghit__wwo section__padding" id="wwo">
      <div className="ghit__wwo-image">
        <AnimationOnScroll animateIn="animate__rubberBand">
          <img src={landing4} />
        </AnimationOnScroll>
      </div>
      <div className="ghit__wwo-text">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
          offset={100}
        >
          <h4>What We Offer</h4>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
          delay={300}
        >
          <p>
            We believe the 21st century demands more than we are getting
            currently from various classrooms. The world we live in has become a
            global village, causes and effects are global; opportunities and
            challenges are also global. Your children are part of this new world
            and must be raised with global mindedness if they must stand the
            chance to compete for the available opportunities. They need to be
            highly creative with very good analytical mind to proffer solutions
            to the problems of their time. Their communication and team working
            ability must be sharpened, for the world, through digital
            technology, is a global village.
          </p>
          <p>We dominate the globe using:</p>
          <div className="ghit__wwo-text_main">
            <h3>IOT</h3>
            <h3>Robotics</h3>
            <h3>Software Engineering</h3>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default WWO;
