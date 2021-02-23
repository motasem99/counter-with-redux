import { INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from '../type';

const initialState = {
  count: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case RESET_COUNTER:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
