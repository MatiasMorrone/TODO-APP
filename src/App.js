import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { todos } from "./todos.json";
import React, { Component } from "react";
import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }
  removeTodo(index) {
    if (window.confirm("¿Estas seguro de que lo queres eliminar?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        }),
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="btn btn-success">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsible}</mark>
              </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="white-text ">
            TASKS
            <span className="btn btn-danger btn-sm ">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
