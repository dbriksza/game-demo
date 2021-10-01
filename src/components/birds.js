import React, { useState, useEffect, useRef } from "react";

import { connect } from "react-redux";

import { setScore, setBirdie } from "../actions/index";

import birdImg from "../assets/bird.png";

import "./birds.scss";

// import "./background.scss";

const Bird = (props) => {
  const [bird, setBird] = useState(false);
  const [birdSpawnX, setBirdSpawnX] = useState(-300);
  const [birdSpawnY, setBirdSpawnY] = useState(115);
  const [birdDirection, setBirdDirection] = useState("");

  const birdy = useRef(null);

  const kevin = document.getElementById("kevin");

  if (birdSpawnX >= 1950 || birdSpawnX <= -500) {
    props.setBirdie(false);
    setBird(false);
    setBirdSpawnX(-300);
    birdy.current.style.left = `${birdSpawnX}px`;
  }
  useEffect(() => {
    setTimeout(function () {
      if (!bird) {
        setBird(true);
        props.setBirdie(true);
        let rnd1 = Math.random() < 0.5 ? -300 : 1920;
        let rnd2 = Math.random() < 0.5 ? 115 : 400;
        setBirdSpawnX(rnd1);
        setBirdSpawnY(rnd2);
        if (rnd1 > 1900) {
          setBirdDirection("left");
        } else {
          setBirdDirection("right");
        }
        console.log(birdDirection);
        birdy.current.style.left = `${birdSpawnX}px`;
        birdy.current.style.top = `${birdSpawnY}px`;
      }
    }, Math.random() * 2000);
  }, [bird]);

  const birdController = (x) =>
    setTimeout(function () {
      setBirdSpawnX((prevBirdSpawnX) => prevBirdSpawnX + x);
      birdy.current.style.left = `${birdSpawnX}px`;
      if (isCollide(birdy.current, kevin)) {
        props.setBirdie(false);
        setBird(false);
        birdy.current.style.left = "-200px";
        setBirdSpawnX(-200);
        window.alert(`You Lost! Score: ${props.score}`);
        props.setScore(-props.score);
      }
    }, 10);

  if (props.birdie === true) {
    if (birdDirection === "right") {
      birdController(3);
    }
    if (birdDirection === "left") {
      birdController(-3);
    }
  }

  const isCollide = (a, b) => {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
      aRect.top + aRect.height < bRect.top + 100 ||
      aRect.top + 50 > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  };

  return (
    <div className="birdContainer">
      <img ref={birdy} id="bird" className="bird" src={birdImg} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    birdie: state.birdie,
    score: state.score,
  };
};

export default connect(mapStateToProps, { setScore, setBirdie })(Bird);
