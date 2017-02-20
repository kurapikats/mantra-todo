import React from 'react';

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.modal').modal();
  }

  handleChange(e) {
    this.setState({
      item: this.refs.todo_item.value
    });
  }

  handleSubmit(e) {

  }

  render() {
    const {todo} = this.props;
    console.log(todo, 'xd');
    return (
      <div id="modal-edit-form" class="modal bottom-sheet">
        <div class="modal-content">
          <h5>Edit {todo.name}</h5>

            <div class="row">
              <div class="input-field col s12">
                <input
                  placeholder="Todo Item"
                  id="todo_item"
                  ref="todo_item"
                  type="text"
                  class="validate"
                  value={this.props.item}
                  onChange={this.handleChange.bind(this)}
                  autoComplete={false}
                />
                <label for="todo_item">Todo Item</label>
              </div>
            </div>

        </div>
        <div class="modal-footer">
          <a href="#!"
            onClick={this.handleSubmit.bind(this)}
            class="modal-action modal-close waves-effect waves-green btn-flat">
            Edit
          </a>
        </div>
      </div>
    );
  }
}

export default ModalEdit;
