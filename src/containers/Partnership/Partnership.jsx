import React from "react";
import "./partnership.css";
import { Navbar, PCard, Perks } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Partnership = () => {
  return (
    <>
      <Navbar />
      <div className="ghit__partnership section__padding">
        <div>
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOut="animate__fadeOutUp">
            <div className="ghit__partnership-perksContainer section__padding">
              <h3>Why Join Our Partnership Program</h3>
              <div className="ghit__partnership-perks">
                <Perks title="Reliability">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi minus aspernatur deserunt recusandae veniam modi nemo
                  repellendus sequi expedita quae ex inventore soluta, non,
                  ullam earum ut aperiam vel natus.
                </Perks>

                <Perks title="Communication">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi minus aspernatur deserunt recusandae veniam modi nemo
                  repellendus sequi expedita quae ex inventore soluta, non,
                  ullam earum ut aperiam vel natus.
                </Perks>
                <Perks title="Innovation">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi minus aspernatur deserunt recusandae veniam modi nemo
                  repellendus sequi expedita quae ex inventore soluta, non,
                  ullam earum ut aperiam vel natus.
                </Perks>
                <Perks title="Strong community">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi minus aspernatur deserunt recusandae veniam modi nemo
                  repellendus sequi expedita quae ex inventore soluta, non,
                  ullam earum ut aperiam vel natus.
                </Perks>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="ghit__partnership-cardContainer">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
            <h4>Partnership Programs</h4>
          </AnimationOnScroll>

          <div className="ghit__partnership-cards">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutDown"
            >
              <PCard title="Parent/Guardian">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis assumenda saepe dolorum aperiam. Vero maxime at
                facere eveniet quidem animi, adipisci corporis laudantium
                dignissimos ipsa, vitae tenetur ex totam sunt.
              </PCard>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutDown"
            >
              <PCard title="Organizations">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                harum voluptate labore tempore eaque veniam dignissimos nobis
                consectetur itaque impedit expedita sequi accusantium ab autem
                sed dolore vitae, ipsam unde!
              </PCard>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutDown"
            >
              <PCard title="School Owners">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                soluta sed magnam deleniti odio architecto, dolorem maiores
                consequatur repellendus, fugiat accusamus harum perferendis
                doloremque quis rerum distinctio vero corporis fuga!
              </PCard>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
