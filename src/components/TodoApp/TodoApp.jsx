import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
      todos: [{ id: 1, title: "An sang" }],
    };
  }

  handleChangeInput(e) {
    this.setState({ todoInput: e.target.value });
  }

  handleSubmitTodo(e) {
    if (e.keyCode === 13 && this.state.todoInput !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          { id: this.state.todos.length, title: this.state.todoInput },
        ],
        todoInput: "",
      });
    }
  }

  render() {
    return (
      <section className="todoapp">
        <div data-reactid=".0">
          <header className="header" data-reactid=".0.0">
            <h1 data-reactid=".0.0.0">todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              defaultValue=""
              data-reactid=".0.0.1"
              onChange={(e) => this.handleChangeInput(e)}
              value={this.state.todoInput}
              onKeyUp={(e) => this.handleSubmitTodo(e)}
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
              {this.state.todos.map((item) => (
                <li
                  className=""
                  data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
                >
                  <div
                    className="view"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                  >
                    <input
                      className="toggle"
                      type="checkbox"
                      data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                    />
                    <label data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1">
                      {item.title}
                    </label>
                    <button
                      className="destroy"
                      data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                    />
                  </div>
                  <input
                    className="edit"
                    defaultValue="ăn sáng"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                  />
                </li>
              ))}
            </ul>
          </section>
          <footer className="footer" data-reactid=".0.2">
            <span className="todo-count" data-reactid=".0.2.0">
              <strong data-reactid=".0.2.0.0">1</strong>
              <span data-reactid=".0.2.0.1"> </span>
              <span data-reactid=".0.2.0.2">item</span>
              <span data-reactid=".0.2.0.3"> left</span>
            </span>
            <ul className="filters" data-reactid=".0.2.1">
              <li data-reactid=".0.2.1.0">
                <a href="#/" className="selected" data-reactid=".0.2.1.0.0">
                  All
                </a>
              </li>
              <span data-reactid=".0.2.1.1"> </span>
              <li data-reactid=".0.2.1.2">
                <a href="#/active" className="" data-reactid=".0.2.1.2.0">
                  Active
                </a>
              </li>
              <span data-reactid=".0.2.1.3"> </span>
              <li data-reactid=".0.2.1.4">
                <a href="#/completed" className="" data-reactid=".0.2.1.4.0">
                  Completed
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>
    );
  }
}
