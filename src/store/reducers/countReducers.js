import countConstant from "../types/countConstant";

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action?.type) {
    case countConstant.INCREMENT:
      return {
        count: state.count + 1,
      };
    case countConstant.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
