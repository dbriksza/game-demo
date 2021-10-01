import React, { useEffect } from "react";

import { connect } from "react-redux";

import { setScore } from "../actions/index";

// import "./background.scss";

const Hud = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setScore(1);
    }, 500);
  }, [props.score]);
  return (
    <div className="hudContainer">
      <span>Score: {props.score}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moving: state.moving,
    direction: state.direction,
    score: state.score,
  };
};

export default connect(mapStateToProps, { setScore })(Hud);
