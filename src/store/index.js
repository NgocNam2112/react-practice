import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./countSlice/countSlice";
import { todoReducer } from "./todoSlice/todoSlice";

const rootReducer = combineReducers({
  countReducer,
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
