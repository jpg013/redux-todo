import React from 'react';
import TodoList from './TodoList';

require("../../styles/app.css");

export default class TodoApp extends React.Component {
  render() {
    return <div>
        <TodoList todos={this.props.todos}></TodoList>
    </div>
  }
};