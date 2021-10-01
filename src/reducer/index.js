import {
  SET_MOVING,
  SET_DIRECTION,
  SET_SCORE,
  SET_POSITION,
  SET_BIRDIE,
} from "../actions";

const initialState = {
  score: 0,
  moving: false,
  birdie: false,
  direction: "  ",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVING:
      return {
        ...state,
        moving: action.payload,
      };
    case SET_DIRECTION:
      return {
        ...state,
        direction: action.payload,
      };
    case SET_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    case SET_BIRDIE:
      return {
        ...state,
        birdie: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
