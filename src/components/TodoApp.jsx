import React from 'react';
import TodoList from './TodoList';
import {connect} from 'react-redux';

require("../../styles/app.css");

export class TodoApp extends React.Component {
  render() {
    return <div>
        <TodoList filter={this.props.filter} todos={this.props.todos}></TodoList>
    </div>
  }
};

function mapStateToProps(state) {
    return {
      todos: state.get('todos'),
      filter: state.get('filter')
    };
}

export const TodoAppContainer = connect(mapStateToProps)(TodoApp);
