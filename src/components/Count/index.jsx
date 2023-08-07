import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
} from "../../store/countSlice/countSlice";

const Count = () => {
  const { countReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };
  return (
    <>
      <div>
        <div>Count: {countReducer.count}</div>
        <div>
          <button onClick={handleIncrease}>Increasement</button>
          <button onClick={handleDecrease}>Decreasement</button>
        </div>
      </div>
    </>
  );
};

export default Count;
