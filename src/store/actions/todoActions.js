import { todoConstants } from "../types/todoConstant";

export const addTodo = (payload) => {
  return {
    type: todoConstants.ADD_TODO,
    payload,
  };
};

export const activeTodo = (payload) => {
  // payload: id todo item
  return {
    type: todoConstants.ACTIVE_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  // payload: id todo item
  return {
    type: todoConstants.REMOVE_TODO,
    payload,
  };
};

export const activeEditTodo = (payload) => {
  // payload: id todo item
  return {
    type: todoConstants.ACTIVE_EDIT_TODO,
    payload,
  };
};

export const editTodo = (payload) => {
  /**
   * payload: {
   *  id: number,
   *  data: string
   * }
   */
  return {
    type: todoConstants.EDIT_TODO,
    payload,
  };
};

export const changeStatus = (payload) => {
  // payload: TODO_STATUS.ALL || TODO_STATUS.ACTIVE || TODO_STATUS.COMPLETED
  return {
    type: todoConstants.CHANGE_STATUS_TODO,
    payload,
  };
};
