import { createSlice } from "@reduxjs/toolkit";
import { TODO_STATUS } from "../../constant/todo";
import { fetchTodo } from "./todoActions";

const initialState = {
  status: TODO_STATUS.ALL,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
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
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
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
