import React from "react";
import "./system.css";
import { back5, ico1, ico2, ico3 } from "../../assets/images";
import { SystemCard } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll";

const System = () => {
  return (
    <div className="ghit__system">
      <div className="ghit__system-content">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          offset={0}
          animatePreScroll={true}
        >
          <h3>Our System</h3>
        </AnimationOnScroll>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <AnimationOnScroll
            animateIn="animate__zoomInDown"
            animateOut="animate__zoomOutUp"
            delay={13}
          >
            <SystemCard number="01" title="Consulting" image={ico1}>
              We offer professional consultation services on various subjects
              such as Solar power, Engineering designs, Embedded Systems,
              Software architecture and so on. We are here to guide you on which
              services to use and how it can serve you best. We also provide
              consultation on which journey to take in this time of
              technological globalization.
            </SystemCard>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__zoomInDown"
            animateOut="animate__zoomOutUp"
            delay={25}
          >
            <SystemCard number="02" title="Research" image={ico2}>
              We double down our effort on researches to create new solutions to
              problems and upgrade our existing technologies. It is our policy
              to work on existing solutions to make it better and create new
              solutions to existing problems.
            </SystemCard>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__zoomInDown"
            animateOut="animate__zoomOutUp"
            delay={50}
          >
            <SystemCard number="03" title="Technology" image={ico3}>
              We make use of the most updated technologies in our researches and
              solutions and make sure we keep up to date with global
              technological trends. We make use of technologies like
              <span style={{ fontWeight: "700" }}>
                - AutoCAD, Arduino, RasberryPie, Python and it's libraries,
                Java, Android, Frontend technologies(HTML, CSS, JavaScript,
                React, Redux, Routers, RESTful APIs), Dobot and so on.
              </span>
            </SystemCard>
          </AnimationOnScroll>
        </div>
      </div>
      <div className="ghit__system-image">
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          animateOut="animate__zoomOut"
          delay={50}
        >
          <img src={back5} />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default System;
