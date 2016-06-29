import React from 'react';
import TodoItem from './TodoItem';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TodoList extends React.Component {
    // This function checks whether an item is completed
    isCompleted(item) {
        return item.get('status') === 'completed';
    }
    getItems() {
        if (this.props.todos) {
            return this.props.todos.filter(todo => this.props.filter === 'all' || todo.get('status') === this.props.filter);
        }
        return [];
    }
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      return <div className="main">
        <ul className="todo-list">
            {this.getItems().map(todo =>
                <TodoItem
                  key={todo.get('text')}
                  text={todo.get('text')}
                  isCompleted={this.isCompleted(todo)}
                  isEditing={todo.get('editing')}
                ></TodoItem>
            )}
        </ul>
      </div>
    }
}
