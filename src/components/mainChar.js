import React, { useRef, useEffect, useState } from "react";
import "./mainChar.scss";

import { connect } from "react-redux";

import { setMoving, setDirection, setPosition } from "../actions/index";

import backwheel from "../assets/motorbike_back_wheel.png";
// import edgeblur from "../assets/edge_blur.png";
import driver from "../assets/motorbike_driver.png";
import frontwheel from "../assets/motorbike_front_wheel.png";
import plant from "../assets/motorbike_plant.png";

const MainChar = (props) => {
  const char = useRef(null);
  const wheelOne = useRef(null);
  const wheelTwo = useRef(null);
  const driverObj = useRef(null);
  const plantIdle = useRef(null);

  useEffect(() => {
    if (
      char.current != null &&
      wheelOne.current != null &&
      wheelTwo.current != null &&
      driverObj.current != null &&
      plantIdle.current != null
    ) {
      if (props.direction === "left") {
        char.current.style.transform = "rotateY(180deg)";
      }
      if (props.direction === "right") {
        char.current.style.transform = "rotateY(0deg)";
      }
      if (props.moving === true) {
        wheelOne.current.style.animation = `rotating 0.5s linear infinite`;
        wheelTwo.current.style.animation = "rotating 0.5s linear infinite";
        driverObj.current.style.animation =
          "driver 0.5s cubic-bezier(0.31, 0.44, 0.445, 1.65) infinite";
        plantIdle.current.style.animation =
          "plant 0.5s cubic-bezier(0.33333, 0.66667, 0.66667, 1) infinite";
      }
      if (props.moving === false) {
        wheelOne.current.style.animation = "none";
        wheelTwo.current.style.animation = "none";
        driverObj.current.style.animation = "none";
        plantIdle.current.style.animation = "none";
      }
      document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          props.setDirection("right");
          props.setMoving(true);
        }
        if (event.key === "ArrowLeft") {
          props.setDirection("left");
          props.setMoving(true);
        }
        if (event.key === " ") {
          props.setPosition(true);
          if (props.direction === "left") {
            char.current.style.animation = "jumpLeft 1s linear 1 none";
          } else {
            char.current.style.animation = "jump 1s linear 1 none";
          }
          char.current.addEventListener(
            "animationend",
            () => (
              (char.current.style.animation = "none"), props.setPosition(false)
            ),
            false
          );
        }
      });
      document.addEventListener("keyup", function (event) {
        if (event.isComposing || event.keyCode === 229) {
          return;
        }
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          props.setMoving(false);
        }
      });
    }
  }, [props.direction, props.moving]);

  return (
    <div
      id="scrollPoint"
      className="animationContainer"
      data-aos="fade-right"
      data-aos-offset="-400"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div id="kevin" className="kevinmotor" ref={char}>
        <div className="bonus-features-container">
          <div className="motoranimationcontainer">
            {/* <div className="motoranimbackground">
              <img className="edgeblurleft" src={edgeblur} />
              <img className="edgeblurright" src={edgeblur} />
            </div> */}
            <div className="moving">
              <img
                ref={wheelOne}
                className="motoranim wheel"
                src={backwheel}
                alt="backwheel"
                style={{ top: "90px", right: "55px" }}
              />
              <img
                ref={wheelTwo}
                className="motoranim wheel"
                src={frontwheel}
                alt="frontwheel"
                style={{ top: "90px", left: "67px" }}
              />
              <img
                ref={driverObj}
                className="motoranim driver"
                src={driver}
                alt="driver"
                style={{ top: "20px" }}
              />
              <img
                ref={plantIdle}
                className="motoranim plant plantIdle"
                id="plant"
                src={plant}
                alt="plant"
                style={{ top: "27px", right: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moving: state.moving,
    direction: state.direction,
    position: state.position,
  };
};

export default connect(mapStateToProps, {
  setDirection,
  setMoving,
  setPosition,
})(MainChar);
