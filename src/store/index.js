import { combineReducers, createStore } from "redux";
import { countReducer } from "./reducers/countReducers";
import { todoReducer } from "./reducers/todoReducers";

const rootReducer = combineReducers({
  countReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;
