import axios from "axios";

const BASE_URL = "https://64b54630f3dbab5a95c7110d.mockapi.io/todo-list";

const instance = axios.create({
  url: BASE_URL,
});

// CRUD => CREATE => READ => UPDATE => DELETE

export const fetchListTodo = async () => {
  try {
    const { data } = await instance.get(BASE_URL);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const createTodo = async (payload) => {
  // ...
};

export const deleteTodo = async (id) => {
  //..
};

export const updateTodo = async (id, payload) => {
  //...
};
