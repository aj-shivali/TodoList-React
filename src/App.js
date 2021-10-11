import React, { Component } from "react";
// import logo from "./logo.svg";

import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/Layout/Header";
import AddTodo from "./Components/AddTodo";
import uuid from "react-uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuid(),
        title: "Learn react",
        completed: false,
      },
      {
        id: uuid(),
        title: "Do the project",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
