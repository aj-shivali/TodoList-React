import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete} delTodo = {this.props.delTodo}
      />
    ));
  }
}

Todos.protoTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
