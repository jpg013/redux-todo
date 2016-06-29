import React from 'react';
import TextInput from './TextInput';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.deleteItem = () => this.props.deleteItem(this.props.id);
    }
    render() {
        var itemClass = classNames({
          'todo': true,
          'completed': this.props.isCompleted,
          'editing': this.props.isEditing
        });

        return <li className={itemClass}>
          <div className="view">
            <input type="checkbox" className="toggle" defaultChecked={this.props.isCompleted}></input>
            <label htmlFor="todo">{this.props.text}</label>
            <button className="destroy" onClick={this.deleteItem}></button>
          </div>
          <TextInput></TextInput>
        </li>
    }
};
