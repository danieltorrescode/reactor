import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        task: '',
        description: '',
      },
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleInputChange(event) {
    // console.log(this.setState);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [id]: value,
      },
    }));
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  formSubmit() {
    let newItem = {
      id: this.state.listData.length + 1,
      title: this.state.formData.task,
      body: this.state.formData.description,
    };

    // validations
    // if true send it
    //  if false show alert
    this.setState((state) => ({
      listData: [...state.listData, newItem],
    }));
  }

  formCancel() {
    alert('cancel');
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Task"
            id="task"
            value={this.state.formData.task}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            id="description"
            value={this.state.formData.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="outline-primary" onClick={this.formSubmit}>
          Guardar
        </Button>{' '}
        <Button variant="outline-secondary" onClick={this.formCancel}>
          Cancelar
        </Button>{' '}
      </Form>
    );
  }
}

export default CustomForm;
