import React from "react";
import "./navbar.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { logo } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInDown"
      animateOut="animate__fadeOutUp"
      offset={15}
    >
      <div className="ghit__navbar" id="heading">
        <div className="ghit__navbar-logo" onClick={() => {navigate("/")}}>
          <img src={logo} />
          <h4>GHIT</h4>
        </div>
        <div className="ghit__navbar-links">
          <p>
            <a href="/#about">About Us</a>
          </p>
          <p>
            <a href="/#wwo">WWO</a>
          </p>
          <p>
            <a href="/courses">Courses</a>
          </p>
          <p>Partnership</p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Navbar;
