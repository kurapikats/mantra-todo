import React from 'react';
import {Todos} from '/lib/collections';
import ItemEdit from './item_edit';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(todo) {
    if (confirm('Are you sure?')) {
      Todos.remove(todo._id);
    }
  }

  render() {
    let {todo} = this.props;
    return (
      <li class="collection-item">{todo.name}
        <span class="badge">
          <ItemEdit todo={todo} />
          <a href="#" onClick={this.handleDelete.bind(this, todo)}><i class="material-icons">delete</i></a>
        </span>
      </li>
    );
  }
}

export default Item;
