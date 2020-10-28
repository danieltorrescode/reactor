import React from 'react';
import PropTypes from 'prop-types';
import { authenticate } from 'tools/toolkit';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import AppMessenger from 'components/AppMessenger';
// import AppModal from 'components/AppModal';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.resource = 'users/login';
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.url = `${this.baseUrl}/${this.resource}`;
    this.state = {
      message: 'null',
      title: 'null',
      type: 'success',
      showMessage: true,
      showFormModal: false,
      email: '',
      password: '',
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formCancel = this.formCancel.bind(this);
  }

  componentDidMount() {
    // console.log("componentDidMount")
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount")
  }

  handleInputChange(event) {
    // console.log(this.setState);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    this.setState({ [id]: value });
  }

  handleSubmit(event) {
    let formData = {
      email: this.state.email,
      password: this.state.password,
    };

    let content = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        /* Authorization: `${localStorage.getItem('token')}`, */
      },
      body: JSON.stringify(formData),
    };

    fetch(this.url, content)
      .then((response) => response.json())
      .then((json) => {
        authenticate(json, this.props.history);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    event.preventDefault();
  }

  formCancel() {
    this.setState({ email: '' });
    this.setState({ password: '' });
  }

  render() {
    return (
      <Container fluid>
        <br />
        <br />
        <br />
        <h1 className="Todo">Login</h1>

        <Row className="mb-5 d-flex justify-content-center">
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="outline-primary" onClick={this.handleSubmit}>
              Enviar
            </Button>{' '}
            <Button variant="outline-secondary" onClick={this.formCancel}>
              Cancelar
            </Button>{' '}
          </Form>
        </Row>
      </Container>
    );
  }
}

Index.propTypes = {
  history: PropTypes.any,
};

export default Index;
