import { todoConstants } from "../types/todoConstant";

const initialState = {
  todos: [
    {
      id: 1,
      title: "An sang",
      isActive: false,
      isEdit: false,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoConstants.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
