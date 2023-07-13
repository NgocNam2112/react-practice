import React, { useState } from "react";
import "../TodoApp/TodoApp.css";
import { TODO_STATUS } from "../../constant/todo";

const TodoAppHook = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "An sang", isActive: false, isEdit: false },
  ]);
  const [btnStatus, setBtnStatus] = useState(TODO_STATUS.ALL);

  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    if (e.keyCode === 13 && todoInput !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: todoInput,
          isActive: false,
          isEdit: false,
        },
      ]);
      setTodoInput("");
    }
  };

  const handleDelete = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)]);
  };

  const handleComplete = (id) => {
    setTodos([
      ...todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        } else {
          return item;
        }
      }),
    ]);
  };

  const handleChangeButtonStatus = (status) => {
    setBtnStatus(status);
  };

  const handleFilterResult = () => {
    return todos.filter((item) => {
      if (btnStatus === TODO_STATUS.ACTIVE && item.isActive === false) {
        return item;
      }
      if (btnStatus === TODO_STATUS.COMPLETED && item.isActive === true) {
        return item;
      }
      if (btnStatus === TODO_STATUS.ALL) {
        return item;
      }
    });
  };

  return (
    <section className="todoapp">
      <div data-reactid=".0">
        <header className="header" data-reactid=".0.0">
          <h1 data-reactid=".0.0.0">todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            data-reactid=".0.0.1"
            onChange={(e) => handleChangeInput(e)}
            value={todoInput}
            onKeyUp={(e) => handleSubmitTodo(e)}
          />
        </header>
        <section className="main" data-reactid=".0.1">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            data-reactid=".0.1.0"
          />
          <label htmlFor="toggle-all" data-reactid=".0.1.1" />
          <ul className="todo-list" data-reactid=".0.1.2">
            {handleFilterResult().map((item, index) => (
              <li
                className={item.isActive ? "completed" : ""}
                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
                key={index}
              >
                <div
                  className="view"
                  data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                >
                  <input
                    className="toggle"
                    type="checkbox"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                    checked={item.isActive}
                    onClick={() => handleComplete(item.id)}
                  />
                  <label data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1">
                    {item.title}
                  </label>
                  <button
                    className="destroy"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
                <input
                  className="edit"
                  data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                />
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer" data-reactid=".0.2">
          <span className="todo-count" data-reactid=".0.2.0">
            <strong data-reactid=".0.2.0.0">
              {handleFilterResult().length}
            </strong>
            <span data-reactid=".0.2.0.1"> </span>
            <span data-reactid=".0.2.0.2">item</span>
            <span data-reactid=".0.2.0.3"> left</span>
          </span>
          <ul className="filters" data-reactid=".0.2.1">
            <li
              data-reactid=".0.2.1.0"
              onClick={() => handleChangeButtonStatus(TODO_STATUS.ALL)}
            >
              <a
                href="#/"
                className={btnStatus === TODO_STATUS.ALL && "selected"}
                data-reactid=".0.2.1.0.0"
              >
                All
              </a>
            </li>
            <span data-reactid=".0.2.1.1"> </span>
            <li
              data-reactid=".0.2.1.2"
              onClick={() => handleChangeButtonStatus(TODO_STATUS.ACTIVE)}
            >
              <a
                href="#/active"
                className={btnStatus === TODO_STATUS.ACTIVE && "selected"}
                data-reactid=".0.2.1.2.0"
              >
                Active
              </a>
            </li>
            <span data-reactid=".0.2.1.3"> </span>
            <li
              data-reactid=".0.2.1.4"
              onClick={() => handleChangeButtonStatus(TODO_STATUS.COMPLETED)}
            >
              <a
                href="#/completed"
                className={btnStatus === TODO_STATUS.COMPLETED && "selected"}
                data-reactid=".0.2.1.4.0"
              >
                Completed
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default TodoAppHook;
