import React from 'react';
import TextInput from './TextInput';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      return <li className="todo">
        <div className="view">
          <input type="checkbox"
                 className="toggle" />
          <label htmlFor="todo">
            {this.props.text}
          </label>
          <button className="destroy"></button>
        </div>
        <TextInput></TextInput>
      </li>
    }
};
