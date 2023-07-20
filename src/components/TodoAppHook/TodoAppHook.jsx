import React, { useEffect, useState } from "react";
import "../TodoApp/TodoApp.css";
import { TODO_STATUS } from "../../constant/todo";
import {
  fetchListTodo,
  createTodo,
  deleteTodo,
  updateTitle,
} from "../../infrastructure/TodoClient/TodoClient";

const TodoAppHook = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [btnStatus, setBtnStatus] = useState(TODO_STATUS.ALL);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmitTodo = async (e) => {
    if (e.keyCode === 13 && todoInput !== "") {
      const res = await createTodo({
        title: todoInput,
        isActive: false,
        isEdit: false,
      });
      setTodos([...todos, { ...res }]);
      // setTodos([
      //   ...todos,
      //   {
      //     id: todos.length + 1,
      //     title: todoInput,
      //     isActive: false,
      //     isEdit: false,
      //   },
      // ]);
      setTodoInput("");
      setIsSelectAll(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    const filterTodo = todos.filter((item) => item.id !== id);
    setTodos([...filterTodo]);

    if (filterTodo.every((item) => item.isActive)) {
      setIsSelectAll(true);
    } else {
      setIsSelectAll(false);
    }
  };

  const handleComplete = async (id) => {
    const currentItem = todos.find((item) => {
      return Number(item.id) === Number(id);
    });
    await updateTitle(id, {
      ...currentItem,
      isActive: !currentItem.isActive,
    });
    const todoList = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: !item.isActive,
        };
      } else {
        return item;
      }
    });

    if (todoList.every((item) => item.isActive)) {
      setIsSelectAll(true);
    } else {
      setIsSelectAll(false);
    }
    setTodos([...todoList]);
  };

  const handleChangeButtonStatus = (status) => {
    setBtnStatus(status);
  };

  const handleFilterResult = () => {
    if (typeof todos === "object" && todos.length > 0) {
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
    }
    return [];
  };

  const handleSelectAll = (e) => {
    setIsSelectAll(!isSelectAll);

    if (e.target.checked) {
      const isAllActive = todos.every((item) => item.isActive);
      if (!isAllActive) {
        setTodos((prevState) =>
          prevState.map((item) => ({ ...item, isActive: true }))
        );
      }
    } else {
      setTodos((prevState) =>
        prevState.map((item) => ({ ...item, isActive: false }))
      );
    }
  };

  const handleDoubleClick = (id) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isEdit: true };
        }
        return item;
      })
    );
  };

  const handleBlurEdit = async (id) => {
    const currentItem = todos.find((item) => {
      return Number(item.id) === Number(id);
    });
    await updateTitle(id, {
      ...currentItem,
      isEdit: false,
    });
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isEdit: false };
        }
        return item;
      })
    );
  };

  const handleChangeEdit = (e, id) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, title: e.target.value };
        }
        return item;
      })
    );
  };

  const handleFetchTodos = async () => {
    const data = await fetchListTodo();
    if (data) {
      setTodos(data);
    }
  };

  // Tuong duong componentDidmout trong class component khi array dependency la mang rong
  useEffect(() => {
    handleFetchTodos();
  }, []);
  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(e) => handleChangeInput(e)}
            value={todoInput}
            onKeyUp={(e) => handleSubmitTodo(e)}
            type="input"
          />
        </header>
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={(e) => handleSelectAll(e)}
            checked={isSelectAll}
          />
          <label htmlFor="toggle-all" />
          <ul className="todo-list">
            {handleFilterResult()?.map((item, index) => (
              <li className={item.isActive ? "completed" : ""} key={index}>
                {!item.isEdit ? (
                  <div
                    className="view"
                    onDoubleClick={() => handleDoubleClick(item.id)}
                  >
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={item.isActive}
                      onChange={() => handleComplete(item.id)}
                    />
                    <label>{item.title}</label>
                    <button
                      className="destroy"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                ) : (
                  <input
                    className="edit"
                    value={item.title}
                    onBlur={() => handleBlurEdit(item.id)}
                    onChange={(e) => handleChangeEdit(e, item.id)}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        handleBlurEdit(item.id);
                      }
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{handleFilterResult().length}</strong>
            <span> </span>
            <span>item</span>
            <span> left</span>
          </span>
          <ul className="filters">
            <li onClick={() => handleChangeButtonStatus(TODO_STATUS.ALL)}>
              <a
                href="#/"
                className={btnStatus === TODO_STATUS.ALL && "selected"}
              >
                All
              </a>
            </li>
            <span> </span>
            <li onClick={() => handleChangeButtonStatus(TODO_STATUS.ACTIVE)}>
              <a
                href="#/active"
                className={btnStatus === TODO_STATUS.ACTIVE && "selected"}
              >
                Active
              </a>
            </li>
            <span> </span>
            <li onClick={() => handleChangeButtonStatus(TODO_STATUS.COMPLETED)}>
              <a
                href="#/completed"
                className={btnStatus === TODO_STATUS.COMPLETED && "selected"}
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
