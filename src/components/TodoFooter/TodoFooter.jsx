import React, { useState } from "react";
import { TODO_STATUS } from "../../constant/todo";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../store/actions/todoActions";

const TodoFooter = ({ todos }) => {
  const { status } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleChangeButtonStatus = (status) => {
    dispatch(changeStatus(status));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        <span> </span>
        <span>item</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li onClick={() => handleChangeButtonStatus(TODO_STATUS.ALL)}>
          <a href="#/" className={status === TODO_STATUS.ALL && "selected"}>
            All
          </a>
        </li>
        <span> </span>
        <li onClick={() => handleChangeButtonStatus(TODO_STATUS.ACTIVE)}>
          <a
            href="#/active"
            className={status === TODO_STATUS.ACTIVE && "selected"}
          >
            Active
          </a>
        </li>
        <span> </span>
        <li onClick={() => handleChangeButtonStatus(TODO_STATUS.COMPLETED)}>
          <a
            href="#/completed"
            className={status === TODO_STATUS.COMPLETED && "selected"}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default TodoFooter;
