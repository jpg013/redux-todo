import React from 'react';
import TodoItem from './TodoItem';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TodoList extends React.Component {
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
                <TodoItem key={todo.get('text')}
                          text={todo.get('text')} />
            )}
        </ul>
      </div>
    }
}
