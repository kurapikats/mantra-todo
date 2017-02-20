import React from 'react';

import ModalEdit from './modal_edit';

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      item: ""
    }
  }

  handleClick() {
    this.setState({
      todo: this.props.todo
    });
  }

  render() {
    let {todo} = this.props;

    return (
      <span>
        <a href="#modal-edit-form" onClick={this.handleClick.bind(this)}><i class="material-icons">mode_edit</i></a>
        <ModalEdit todo={this.state.todo} />
      </span>
    );
  }
}

export default ItemEdit;
