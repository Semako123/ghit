import React from "react";
import "./footer.css";
import { landing3, facebook, twitter, instagram } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <div className="ghit__footer">
      <img src={landing3} />
      <div className="ghit__footer-content">
        <div className="ghit__footer-content_left">
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="fadeOutUp"
            offset={10}
          >
            <h4>GHIT</h4>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="fadeOutUp"
            offset={10}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ipsum, deleniti, laboriosam praesentium commodi dolorum cupiditate
              doloribus quae sapiente repellendus laudantium quo officia harum
              id eius ullam, esse fugit architecto.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="fadeOutUp"
          >
            <h5>Social Media</h5>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="fadeOutUp"
            offset={10}
          >
            <div className="ghit__footer-content_iconBar">
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="fadeOutUp"
            offset={10}
          >
            <p>All rights reserved &copy; 2023</p>
          </AnimationOnScroll>
        </div>
        <div className="ghit__footer-content_right">
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOut="fadeOutDown"
          >
            <div>
              <h5>About Us</h5>
              <p>Courses</p>
              <p>Partnership</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOut="fadeOutDown"
          >
            <div>
              <h5>Partnership</h5>
              <p>School partnership</p>
              <p>Parents/Guardian partnership</p>
              <p>Organizational Partnership</p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Footer;
