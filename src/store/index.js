import { createStore } from "redux";
import { countReducer } from "./reducers/countReducers";

const store = createStore(countReducer);

export default store;
