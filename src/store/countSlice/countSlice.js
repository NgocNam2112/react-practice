import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      // payload: 1
      state.count += action.payload;
    },
    decreaseCount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increaseCount, decreaseCount } = countSlice.actions;
export const countReducer = countSlice.reducer;
