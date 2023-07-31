import { todoConstants } from "../types/todoConstant";

export const addTodo = (payload) => {
  return {
    type: todoConstants.ADD_TODO,
    payload,
  };
};
