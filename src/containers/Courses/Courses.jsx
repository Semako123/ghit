import React from "react";
import "./courses.css";
import { Navbar, CourseCard } from "../../components";
import { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  course1,
  course10,
  course2,
  course3,
  course4,
  course5,
  course6,
  course7,
  course8,
  course9,
  courseS1,
  courseS10,
  courseS11,
  courseS12,
  courseS13,
  courseS14,
  courseS15,
  courseS16,
  courseS17,
  courseS18,
  courseS19,
  courseS2,
  courseS20,
  courseS21,
  courseS22,
  courseS23,
  courseS24,
  courseS3,
  courseS4,
  courseS5,
  courseS6,
  courseS7,
  courseS8,
} from "../../assets/images";

const Courses = () => {
  const [filter, setFilter] = useState("All");
  const [List, setList] = useState([]);
  const updateFilter = (e) => {
    setFilter(e.target.innerText);
  };

  const courseList = [
    {
      title: "Introduction to Robotics and Coding",
      category: "Junior",
      duration: "6",
      img: course1,
    },
    {
      title: "Animation with Scratch (Stories). Part 1",
      category: "Junior",
      duration: "40",
      img: course4,
    },
    {
      title: "Animation with Scratch (Stories). Part 2",
      category: "Junior",
      duration: "40",
      img: course5,
    },
    {
      title: "Animation with Scratch (Games). Part 1",
      category: "Junior",
      duration: "40",
      img: course6,
    },
    {
      title: "Animation with Scratch (Games). Part 2",
      category: "Junior",
      duration: "40",
      img: course7,
    },
    {
      title: "Robot Basic Input and Output. Part 1",
      category: "Junior",
      duration: "40",
      img: course2,
    },
    {
      title: "Robot Basic Input and Output. Part 2",
      category: "Junior",
      duration: "40",
      img: course3,
    },

    {
      title: "Tinkering with robots. Part 1",
      category: "Junior",
      duration: "40",
      img: course8,
    },
    {
      title: "Tinkering with robots. Part 2",
      category: "Junior",
      duration: "40",
      img: course9,
    },
    {
      title: "Flying and drone operations",
      category: "Junior",
      duration: "40",
      img: course10,
    },
    {
      title: "Introduction to Robotics and Coding",
      category: "Senior",
      duration: "4",
      img: courseS1,
    },
    {
      title: "Programming with Dobot AI-Starter/MBot MEGA (Controls)",
      category: "Senior",
      duration: "20",
      img: courseS2,
    },
    {
      title: "Robot Sensors and it's applications (Signals)",
      category: "Senior",
      duration: "20",
      img: courseS3,
    },
    {
      title: "Robots Movement with Servo Motors",
      category: "Senior",
      duration: "20",
      img: courseS4,
    },
    {
      title: "Robot wireless control (Infrared) Part 1",
      category: "Senior",
      duration: "20",
      img: courseS5,
    },
    {
      title: "Robot wireless control (Bluetooth) Part 2",
      category: "Senior",
      duration: "20",
      img: courseS6,
    },
    {
      title: "Robot wireless control (RF) Part 3",
      category: "Senior",
      duration: "20",
      img: courseS7,
    },
    {
      title: "Android Applications (Robot Control Systems) Part 1",
      category: "Senior",
      duration: "20",
      img: courseS8,
    },
    {
      title: "Android Applications (Robot Control Systems) Part 2",
      category: "Senior",
      duration: "20",
      img: courseS10,
    },
    {
      title: "Android Application Development (Applications) Part 1",
      category: "Senior",
      duration: "20",
      img: courseS11,
    },
    {
      title: "Android Application Development (Applications) Part 2",
      category: "Senior",
      duration: "20",
      img: courseS12,
    },
    {
      title: "Android Application Development (Applications) Part 3",
      category: "Senior",
      duration: "20",
      img: courseS13,
    },
    {
      title: "Android Application Development (Games) Part 1",
      category: "Senior",
      duration: "20",
      img: courseS14,
    },
    {
      title: "Android Application Development (Games) Part 2",
      category: "Senior",
      duration: "20",
      img: courseS15,
    },
    {
      title: "Android Application Development (Games) Part 3",
      category: "Senior",
      duration: "20",
      img: courseS16,
    },
    {
      title: "3D Printing. Part 1",
      category: "Senior",
      duration: "20",
      img: courseS17,
    },
    {
      title: "3D Printing. Part 2",
      category: "Senior",
      duration: "20",
      img: courseS18,
    },
    {
      title: "Coding with C language (Arduino Mega in automation). Part 1",
      category: "Senior",
      duration: "20",
      img: courseS19,
    },
    {
      title: "Coding with C language (Arduino Mega in automation). Part 2",
      category: "Senior",
      duration: "20",
      img: courseS20,
    },
    {
      title: "Programming with Drones.",
      category: "Senior",
      duration: "20",
      img: courseS24,
    },
    {
      title: "Python with Raspberry Pi Part 1.",
      category: "Senior",
      duration: "20",
      img: courseS21,
    },
    {
      title: "Python with Raspberry Pi Part 2.",
      category: "Senior",
      duration: "20",
      img: courseS22,
    },
    {
      title: "Python with Raspberry Pi Part 3.",
      category: "Senior",
      duration: "20",
      img: courseS23,
    },
  ];

  useEffect(() => {
    setList(
      courseList.filter((x) => x.category === filter || filter === "All")
    );
    // eslint-disable-next-line
  }, [filter]);

  return (
    <>
      <Navbar />
      <div className="ghit__courses section__padding">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOut"
          offset={17}
        >
          <h3>Courses</h3>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOut"
          offset={17}
        >
          <div className="ghit__courses-filter">
            <h5>Filter by category : </h5>
            <button onClick={updateFilter}>All</button>
            <button onClick={updateFilter}>Junior</button>
            <button onClick={updateFilter}>Senior</button>
          </div>
        </AnimationOnScroll>

        <div>
          <h5 className="ghit__courses-container_title">
            {filter} {filter === "All" ? " Categories" : "Category"}
          </h5>
          <div className="ghit__courses-container">
            {List.map((x, index) => (
              <AnimationOnScroll
                animateIn="animate__flipInY"
                animateOut="animate__flipOutY"
                key={index}
              >
                <CourseCard
                  title={x.title}
                  img={x.img}
                  category={x.category}
                  duration={x.duration}
                />
              </AnimationOnScroll>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
