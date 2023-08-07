import React, { useEffect, useState } from "react";
import "../TodoApp/TodoApp.css";
import { TODO_STATUS } from "../../constant/todo";
import {
  fetchListTodo,
  createTodo,
  deleteTodo,
  updateTitle,
} from "../../infrastructure/TodoClient/TodoClient";
import { useDispatch, useSelector } from "react-redux";

import TodoFooter from "../TodoFooter/TodoFooter";
import {
  activeEditTodo,
  activeTodo,
  addTodo,
  editTodo,
  removeTodo,
} from "../../store/todoSlice/todoSlice";

const TodoAppHook = () => {
  const { todos, status } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");
  // const [todos, setTodos] = useState([]);

  const [isSelectAll, setIsSelectAll] = useState(false);

  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  // const handleSubmitTodo = async (e) => {
  //   if (e.keyCode === 13 && todoInput !== "") {
  //     const res = await createTodo({
  //       title: todoInput,
  //       isActive: false,
  //       isEdit: false,
  //     });
  //     setTodos([...todos, { ...res }]);
  //     setTodoInput("");
  //     setIsSelectAll(false);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   await deleteTodo(id);
  //   const filterTodo = todos.filter((item) => item.id !== id);
  //   setTodos([...filterTodo]);

  //   if (filterTodo.every((item) => item.isActive)) {
  //     setIsSelectAll(true);
  //   } else {
  //     setIsSelectAll(false);
  //   }
  // };

  // const handleComplete = async (id) => {
  //   const currentItem = todos.find((item) => {
  //     return Number(item.id) === Number(id);
  //   });
  //   await updateTitle(id, {
  //     ...currentItem,
  //     isActive: !currentItem.isActive,
  //   });
  //   const todoList = todos.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         isActive: !item.isActive,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });

  //   if (todoList.every((item) => item.isActive)) {
  //     setIsSelectAll(true);
  //   } else {
  //     setIsSelectAll(false);
  //   }
  //   setTodos([...todoList]);
  // };

  // const handleChangeButtonStatus = (status) => {
  //   setBtnStatus(status);
  // };

  // const handleSelectAll = (e) => {
  //   setIsSelectAll(!isSelectAll);

  //   if (e.target.checked) {
  //     const isAllActive = todos.every((item) => item.isActive);
  //     if (!isAllActive) {
  //       setTodos((prevState) =>
  //         prevState.map((item) => ({ ...item, isActive: true }))
  //       );
  //     }
  //   } else {
  //     setTodos((prevState) =>
  //       prevState.map((item) => ({ ...item, isActive: false }))
  //     );
  //   }
  // };

  // const handleDoubleClick = (id) => {
  //   setTodos((prevState) =>
  //     prevState.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, isEdit: true };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const handleBlurEdit = async (id) => {
  //   const currentItem = todos.find((item) => {
  //     return Number(item.id) === Number(id);
  //   });
  //   await updateTitle(id, {
  //     ...currentItem,
  //     isEdit: false,
  //   });
  //   setTodos((prevState) =>
  //     prevState.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, isEdit: false };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const handleChangeEdit = (e, id) => {
  //   setTodos((prevState) =>
  //     prevState.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, title: e.target.value };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const handleFetchTodos = async () => {
  //   const data = await fetchListTodo();
  //   if (data) {
  //     setTodos(data);
  //   }
  // };

  // Tuong duong componentDidmout trong class component khi array dependency la mang rong
  // useEffect(() => {
  //   handleFetchTodos();
  // }, []);

  const handleSubmitTodo = (e) => {
    const length = todos.length;

    if (e.keyCode === 13 && todoInput !== "") {
      dispatch(
        addTodo({
          id: length + 1,
          title: todoInput,
          isActive: false,
          isEdit: false,
        })
      );
      setTodoInput("");
    }
  };

  const handleComplete = (e, id) => {
    dispatch(activeTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleDoubleClick = (id) => {
    dispatch(activeEditTodo(id));
  };

  const handleBlurEdit = (id) => {
    dispatch(activeEditTodo(id));
  };

  const handleChangeEdit = (e, id) => {
    dispatch(
      editTodo({
        id,
        data: e.target.value,
      })
    );
  };

  const handleFilterResult = () => {
    if (typeof todos === "object" && todos.length > 0) {
      return todos.filter((item) => {
        if (status === TODO_STATUS.ACTIVE && item.isActive === false) {
          return item;
        }
        if (status === TODO_STATUS.COMPLETED && item.isActive === true) {
          return item;
        }
        if (status === TODO_STATUS.ALL) {
          return item;
        }
      });
    }
    return [];
  };

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
            // onChange={(e) => handleSelectAll(e)}
            checked={isSelectAll}
          />
          <label htmlFor="toggle-all" />
          <ul className="todo-list">
            {handleFilterResult().map((item, index) => (
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
                      onChange={(e) => handleComplete(e, item.id)}
                      // onChange={() => handleComplete(item.id)}
                    />
                    <label>{item.title}</label>
                    <button
                      className="destroy"
                      onClick={() => handleDelete(item.id)}
                      // onClick={() => handleDelete(item.id)}
                    />
                  </div>
                ) : (
                  <input
                    className="edit"
                    value={item.title}
                    onBlur={(e) => handleBlurEdit(item.id)}
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
        <TodoFooter todos={handleFilterResult()} />
      </div>
    </section>
  );
};

export default TodoAppHook;
