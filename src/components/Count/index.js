import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "../../store/actions/countActions";

const Count = () => {
  const countState = useSelector((state) => state.count);
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
        <div>Count: {countState}</div>
        <div>
          <button onClick={handleIncrease}>Increasement</button>
          <button onClick={handleDecrease}>Decreasement</button>
        </div>
      </div>
    </>
  );
};

export default Count;
