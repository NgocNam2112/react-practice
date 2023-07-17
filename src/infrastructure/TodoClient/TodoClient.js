import axios from "axios";

const BASE_URL = "https://64b54630f3dbab5a95c7110d.mockapi.io/todo-list";

const instance = axios.create({
  url: BASE_URL,
});

export const fetchListTodo = async () => {
  try {
    const { data } = await instance.get(BASE_URL);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
