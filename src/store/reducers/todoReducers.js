import { TODO_STATUS } from "../../constant/todo";
import { todoConstants } from "../types/todoConstant";

const initialState = {
  status: TODO_STATUS.ALL,
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
    case todoConstants.ACTIVE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                isActive: !item.isActive,
              };
            }
            return item;
          }),
        ],
      };
    case todoConstants.REMOVE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter((item) => item.id !== action.payload && item),
        ],
      };
    case todoConstants.EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                title: action.payload.data,
              };
            }
            return item;
          }),
        ],
      };
    case todoConstants.ACTIVE_EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                isEdit: !item.isEdit,
              };
            }
            return item;
          }),
        ],
      };

    case todoConstants.CHANGE_STATUS_TODO:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
