export const SET_MOVING = "SET_MOVING";
export const SET_DIRECTION = "SET_DIRECTION";
export const SET_SCORE = "SET_SCORE";
export const SET_POSITION = "SET_POSITION";
export const SET_BIRDIE = "SET_BIRDIE";

export const setMoving = (moving) => (dispatch) => {
  dispatch({ type: SET_MOVING, payload: moving });
};

export const setDirection = (direction) => (dispatch) => {
  dispatch({ type: SET_DIRECTION, payload: direction });
};

export const setScore = (score) => (dispatch) => {
  dispatch({ type: SET_SCORE, payload: score });
};

export const setPosition = (position) => (dispatch) => {
  dispatch({ type: SET_POSITION, payload: position });
};

export const setBirdie = (birdie) => (dispatch) => {
  dispatch({ type: SET_BIRDIE, payload: birdie });
};
