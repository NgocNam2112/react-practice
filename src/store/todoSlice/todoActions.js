import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListTodo } from "../../infrastructure/TodoClient/TodoClient";

export const fetchTodo = createAsyncThunk("todoSlice/fetchTodo", async () => {
  return await fetchListTodo();
});
