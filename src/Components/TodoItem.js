import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#C12868",
      border: "none",
      borderRadius: "10px",
      margin: "10px",
      padding: "10px",
      borderBotton: "1px #ccc dotted",
      color: "#ECCCC2",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            className="check"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}
TodoItem.protoTypes = {
  todos: PropTypes.object.isRequired,
};

const btnStyle = {
  background: "#3A0D3D",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
