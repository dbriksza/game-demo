import React, { useState } from "react";

import { connect } from "react-redux";

import "./background.scss";

const Background = (props) => {
  const [offsetBack, setOffsetBack] = useState(0);
  const bgb = document.getElementById("what");
  const bgf = document.getElementById("heck");
  if (bgb != null) {
    var moveRight = () =>
      setTimeout(function () {
        setOffsetBack((prevOffsetBack) => prevOffsetBack - 1);
        bgb.style.backgroundPositionX = `${offsetBack}px`;
        bgf.style.backgroundPositionX = `${offsetBack * 10}px`;
      }, 10);

    var moveLeft = function () {
      setTimeout(function () {
        setOffsetBack((prevOffsetBack) => prevOffsetBack + 1);
        bgb.style.backgroundPositionX = `${offsetBack}px`;
        bgf.style.backgroundPositionX = `${offsetBack * 10}px`;
      }, 10);
    };

    if (props.moving === true && props.direction === "right") {
      moveRight();
    }
    if (props.moving === true && props.direction === "left") {
      moveLeft();
    }
  }

  return (
    <div className="backgroundContainer">
      <div id="what" className="backgroundBack"></div>
      <div id="heck" className="backgroundFore"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moving: state.moving,
    direction: state.direction,
  };
};

export default connect(mapStateToProps)(Background);
