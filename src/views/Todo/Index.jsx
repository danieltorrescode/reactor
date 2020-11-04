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
    this.resource = 'tasks';
    this.state = {
      message: 'null',
      title: 'null',
      type: 'success',
      showMessage: true,
      showModal: false,
      updateList: false,
      selectedItem: {},
    };
  }

  componentDidMount() {
    // console.log("componentDidMount")
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount")
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
    this.setState({ showMessage: true });
  };

  toggleMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  updateList = () => {
    this.setState({ selectedItem: {} });
    this.setState({ updateList: !this.state.updateList });
  };

  selectedItem = (item) => {
    this.setState({ selectedItem: { ...item } });
    this.toggleModal();
  };

  render() {
    const form = (
      <Form
        resource={this.resource}
        selectedItem={this.state.selectedItem}
        updateList={this.updateList}
        toggleModal={this.toggleModal}
      ></Form>
    );
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
          <Button onClick={this.toggleModal}>Large modal</Button>
          <AppModal
            form={form}
            show={this.state.showModal}
            toggleModal={this.toggleModal}
          />
        </Row>

        <br />
        <h1>List</h1>
        <Row className="mb-5 d-flex justify-content-center">
          <List
            resource={this.resource}
            updateList={this.state.updateList}
            selectedItem={this.selectedItem}
          ></List>
        </Row>
      </Container>
    );
  }
}

export default Index;
