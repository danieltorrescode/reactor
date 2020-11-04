import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.resource = this.props.resource;
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.url = `${this.baseUrl}/${this.resource}`;
    this.state = {
      action: '',
      selectedItem: {},
      name: '',
      description: '',
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    this.setState({ [id]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let body = {
      name: this.state.name,
      description: this.state.description,
    };

    let url = this.url;
    let method = 'POST';
    if (this.state.action === 'Update') {
      url = `${this.url}/${this.state.selectedItem._id}`;
      method = 'PUT';
    }

    let content = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(body),
    };

    fetch(url, content)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.props.updateList();
        this.handleCancel();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  handleCancel() {
    this.setState({ name: '' });
    this.setState({ description: '' });
    this.props.toggleModal();
  }

  componentDidMount() {
    if ('_id' in this.props.selectedItem) {
      this.setState({ action: 'Update' });
      this.setState({ selectedItem: { ...this.props.selectedItem } });
      this.setState({ name: this.props.selectedItem.name });
      this.setState({ description: this.props.selectedItem.description });
    } else {
      this.setState({ action: 'Save' });
    }
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Task"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="outline-primary" onClick={this.handleSubmit}>
          {this.state.action}
        </Button>{' '}
        <Button variant="outline-secondary" onClick={this.handleCancel}>
          Cancel
        </Button>{' '}
      </Form>
    );
  }
}

CustomForm.propTypes = {
  selectedItem: PropTypes.object,
  resource: PropTypes.string,
  updateList: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default CustomForm;
