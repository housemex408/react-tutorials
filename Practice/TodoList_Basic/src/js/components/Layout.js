import React from "react";
import TodoList from "./TodoList";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Awesome Todo List!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TodoList placeHolder="type a new item"/>
      </div>
    );
  }
}
