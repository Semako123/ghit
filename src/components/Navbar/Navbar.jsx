import React from "react";
import "./navbar.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { logo } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInDown"
      animateOut="animate__fadeOutUp"
      offset={15}
    >
      <div className="ghit__navbar" id="heading">
        <div
          className="ghit__navbar-logo"
          onClick={() => {
            navigate("/");
          }}
        >
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
          <p
            onClick={() => {
              navigate("/programs");
            }}
          >
            <a>Programs</a>
          </p>
          <p
            onClick={() => {
              navigate("/partnership");
            }}
          >
            <a>Partnership</a>
          </p>
        </div>
        <div>
          {toggle ? (
            <RiCloseLine
              color="white"
              size={27}
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="white"
              size={27}
              onClick={() => {
                setToggle(true);
              }}
            />
          )}
        </div>
        {toggle && (
          <div className="ghit__navbar-links_mobile scale-up-center">
            <p>
              <a href="/#about">About Us</a>
            </p>
            <p>
              <a href="/#wwo">WWO</a>
            </p>
            <p
              onClick={() => {
                navigate("/programs");
              }}
            >
              <a>Programs</a>
            </p>
            <p
              onClick={() => {
                navigate("/partnership");
              }}
            >
              <a>Partnership</a>
            </p>
          </div>
        )}
      </div>
    </AnimationOnScroll>
  );
};

export default Navbar;
