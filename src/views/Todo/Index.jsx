import React from 'react';
// import {regExpr , getTodaysDate} from 'tools/toolkit';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import List from './List';
import Form from './Form';
import AppMessenger from 'components/AppMessenger';
import AppModal from 'components/AppModal';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.resource = 'posts/1';
    this.state = {
      message: 'null',
      title: 'null',
      type: 'success',
      showMessage: true,
      showFormModal: false,
    };
  }

  componentDidMount() {
    // console.log("componentDidMount")
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount")
  }

  showFormModal = () => {
    this.setState({ showFormModal: !this.state.showFormModal });
    this.setState({ showMessage: true });
  };

  toggleMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    const form = <Form resource={this.resource}></Form>;
    return (
      <Container fluid>
        <br />
        <br />
        <br />
        <h1 className="Todo">Todo</h1>

        <Row className="mb-5 d-flex justify-content-center">
          <Col></Col>
          <Col>
            <AppMessenger
              show={this.state.showMessage}
              message={this.state.message}
              title={this.state.title}
              type={this.state.type}
              toggleMessage={this.toggleMessage}
            />
          </Col>
          <Col></Col>
        </Row>

        <Row className="mb-5 d-flex justify-content-center">
          <Button onClick={this.showFormModal}>Large modal</Button>
          <AppModal
            form={form}
            show={this.state.showFormModal}
            showFormModal={this.showFormModal}
          />
        </Row>

        <br />
        <h1>List</h1>
        <Row className="mb-5 d-flex justify-content-center">
          <List resource={this.resource}></List>
        </Row>
      </Container>
    );
  }
}

export default Index;
