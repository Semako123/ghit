import React from "react";
import "./header.css";
import { back1, landingIco } from "../../assets/images";
import { Button } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Header = () => {
  return (
    <div className="ghit__header">
      <img src={back1} />
      <div className="ghit__header-content section__padding" >
        <div className="ghit__header-content_text">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
            offset={0}
          >
            <p>Build the Future with</p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
            <h1>God's Heritage Institute of Technology</h1>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fade"
          >
            <Button>Get Started</Button>
          </AnimationOnScroll>
        </div>
        <div className="ghit__header-content_image">
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
          >
            <img src={landingIco} className="ghit__header-ico" />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Header;
