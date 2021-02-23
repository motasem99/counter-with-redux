import { INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from '../type';

export const increaseCounter = (number) => (dispatch) => {
  dispatch({
    type: INCREASE_COUNTER,
    payload: number,
  });
};

export const decreaseCounter = (number) => (dispatch) => {
  dispatch({
    type: DECREASE_COUNTER,
    payload: number,
  });
};

export const resetCounter = (_) => (dispatch) => {
  dispatch({
    type: RESET_COUNTER,
  });
};
