import React from 'react';
// import {regExpr , getTodaysDate} from 'tools/toolkit';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import TodoList from 'views/Todo/TodoList';
import TodoForm from 'views/Todo/TodoForm';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.resource = 'posts/1';
        this.state = {
        };
    }

    componentDidMount() {
        // console.log("componentDidMount")
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount")
    }

    render() {
      return (
        <Container fluid>
            <br/><br/><br/>
            <h1 className="Todo">Todo</h1>
            <Row className="mb-5 d-flex justify-content-center">
                <TodoForm resource={this.resource}></TodoForm>
            </Row>

            <br/>
            <h1>List</h1>
            <Row className="mb-5 d-flex justify-content-center">
                <TodoList resource={this.resource}></TodoList>
            </Row>
        </Container>
      );
    }
  }

export default Todo;
