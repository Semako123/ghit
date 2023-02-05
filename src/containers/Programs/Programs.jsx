import React from "react";
import "./programs.css";
import { prog1, prog2 } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Navbar } from "../../components";

const Programs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar /> 
      <div className="ghit__programs">
        <AnimationOnScroll animateIn="animate__fadeInLeft" offset={0}>
          <h4>Explore GHIT Programs and Courses</h4>
        </AnimationOnScroll>
        <div className="ghit__programs-courses">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div
              onClick={() => {
                navigate("/courses");
              }}
            >
              <h5>Programming for Kids</h5>
              <div>
                <img src={prog2} />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft" delay={100}>
            <div
              onClick={() => {
                navigate("/adult-courses");
              }}
            >
              <h5>Adult Programs</h5>
              <div>
                <img src={prog1} />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
};

export default Programs;
