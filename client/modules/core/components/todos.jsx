import React from 'react';
import Collections from '/lib/collections';
import Item from './item';

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  getItems() {
    return this.props.todos.map((todo, i) => {
      return <Item key={i} todo={todo} />
    });
  }

  render() {
    return (
      <ul class="collection">
        {this.getItems()}
      </ul>
    );
  }
}

export default Todos;
