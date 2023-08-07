import { createSlice } from "@reduxjs/toolkit";
import { TODO_STATUS } from "../../constant/todo";

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

export const todoSlice = createSlice({
  name: "createSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("123");
      state.todos.push(action.payload);
      //   return {
      //     ...state,
      //     todos: [...state.todos, action.payload],
      //   };
    },
    activeTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.id !== action.payload && item
      );
    },

    activeEditTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isEdit: !item.isEdit,
          };
        }
        return item;
      });
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.data,
          };
        }
        return item;
      });
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {
  addTodo,
  activeTodo,
  removeTodo,
  activeEditTodo,
  editTodo,
  changeStatus,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
