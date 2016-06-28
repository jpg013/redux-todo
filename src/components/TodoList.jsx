import React from 'react';
import TodoItem from './TodoItem';

export default class TodoItem extends React.Component {
    render() {
      return <div className="main">
        <ul className="todo-list">
          {this.props.todos.map(item =>
            <TodoItem key={item.get('text')}
                      text={item.get('text')} />
          )}
        </ul>
      </div>
    }
}
