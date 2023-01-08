import React from "react";
import "./about.css";
import { Card } from "../../components";
import { card1, card2, card3, card4 } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOutLeft"
    >
      <div className="ghit__about animated-gradient" id="about">
        <div className="ghit__about-text">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
            offset={30}
          >
            <h3>About Us</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
            delay={50}
          >
            <p>
              GHIT Technologies is a training institute with seasoned and
              experienced instructors that has been inspiring the genius in the
              younger and older generations. For over ten years, the institute
              had been championing practical trainings in Robotics, electronics,
              computer technology, programming, solar technology and other
              information technology fields. We are well equipped and informed
              with the technological trends and demands that we are currently
              driving creativity amongst the children in primary and secondary
              schools. Schools and companies in partnership with us can testify
              to our quality of service.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
            delay={100}
          >
            <p>
              To stand the chance, we advise you start with them at early age.
              Two technologies that are strongly related are dominating
              activities of the 21st century. These are: software engineering
              and robotics. The way we are using computers today shall be the
              way robots and artificial intelligence shall be in use and we will
              need software for almost everything. Every day, we interact with
              applications developed by people, young and old. Robots are taking
              over some jobs that were once done by humans; new and
              sophisticated once are being created and artificial intelligence
              is embedded in the simple and complex things we daily interact
              with. Those that will be relevant in the 21st century shall be
              those that can solve the new problems created by the use of the
              aforementioned. The old jobs we are familiar with are fast fading
              away while the new, born out of software engineering, robotics and
              internet of things (IoT), are emerging.
            </p>
          </AnimationOnScroll>
        </div>
        <div className="ghit__about-cards">
          <div>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              delay={200}
            >
              <Card text="Innovation" img={card1} />
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              delay={250}
            >
              <Card text="Development" img={card2} />
            </AnimationOnScroll>
          </div>
          <div className="ghit__about-cards2">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              delay={225}
            >
              <Card text="Universality" img={card3} />
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              delay={300}
            >
              <Card text="Engineering" img={card4} />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default About;
