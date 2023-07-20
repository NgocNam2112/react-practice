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
  try {
    const { data } = await instance.post(BASE_URL, payload);

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await instance.delete(`${BASE_URL}/${id}`);
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};

export const updateTitle = async (id, payload) => {
  try {
    const { data } = await instance.put(`${BASE_URL}/${id}`, payload);
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};
