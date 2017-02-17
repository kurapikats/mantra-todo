import React from 'react';
import {Todos} from '/lib/collections';

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    }
  }

  componentDidMount() {
    $('.modal').modal();
  }

  handleSubmit(e) {
    e.preventDefault();
    Todos.insert({
      name: this.state.item
    }, (err, res) => {
      this.setState({
        item: ""
      });
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      item: this.refs.todo_item.value
    });
  }

  render() {
    return (
      <div>
        <div class="fixed-action-btn">
          <a href="#modal-add-form" class="btn-floating btn-medium waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>
        </div>

        <div id="modal-add-form" class="modal bottom-sheet">
          <div class="modal-content">
            <h5>Create New Item</h5>

              <div class="row">
                <div class="input-field col s12">
                  <input
                    placeholder="Todo Item"
                    id="todo_item"
                    ref="todo_item"
                    type="text"
                    class="validate"
                    value={this.state.item}
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
              Add
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AddButton;
