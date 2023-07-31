import countConstant from "../types/countConstant";

const increaseCount = () => {
  return {
    type: countConstant.INCREMENT,
  };
};

const decreaseCount = () => {
  return {
    type: countConstant.DECREMENT,
  };
};

export { increaseCount, decreaseCount };
