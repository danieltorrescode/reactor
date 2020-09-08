import React from 'react';
// import {regExpr , getTodaysDate} from 'tools/rules';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData:{
                task: '',
                description: ''
            },
            listData:[]
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

        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [id]: value
            }
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
        }

        // validations
        // if true send it
        //  if false show alert
        this.setState(state => ({
            listData: [
                ...state.listData,
                newItem
            ]
        }));
    }

    formCancel() {
        alert("cancel")
    }

    list(data){
        this.setState({
            listData : [data]
        });
    }

    getList(){
        let resource='posts/1';
        let baseUrl = process.env.REACT_APP_BASE_URL;
        let url = `${baseUrl}/${resource}`;
        // let content = {
        //     method: "GET",
        //     headers:{
        //         'Authorization': `${localStorage.getItem("token")}`,
        //         'Content-Type': 'application/json',
        //     },
        // };

        fetch(url)
        .then(response => response.json())
        .then(json => this.list(json))
        .catch(error => {
            console.error('Error:', error)
        });
    }

    Items(listItems) {
        return listItems.map(
            (item) =>  
                <tr  key={item.id} >
                    <td>{ item.id}</td>
                    <td>{ item.title}</td>
                    <td>{ item.body}</td>
                </tr>
        );
    }

    componentDidMount() {
        // console.log("componentDidMount")
        this.getList();
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
      return (
        <Container fluid>
          <br/><br/><br/>
          <h1 className="TodoList">TodoList</h1>
          <Row className="mb-5 d-flex justify-content-center">
            <Form>

              <Form.Group >
                <Form.Label>Task</Form.Label>
                <Form.Control 
                    type="text" placeholder="Task" id="task"
                    value={this.state.formData.task} onChange={this.handleChange} 
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control 
                    as="textarea" rows="3" id="description"
                    value={this.state.formData.description} onChange={this.handleChange} 
                />
              </Form.Group>
              <Button variant="outline-primary" onClick={this.formSubmit}>Guardar</Button>{' '}
              <Button variant="outline-secondary" onClick={this.formCancel}>Cancelar</Button>{' '}
            </Form>
          </Row>

          <br/>
          <h1>List</h1>

          <Row className="mb-5 d-flex justify-content-center">
            <ul>
              <li>{this.state.formData.task}</li>
              <li>{this.state.formData.description}</li>
              {/* <li>{ getTodaysDate() }</li>
              <li>{ this.regular("danieltor m") }</li> */}
              {/* <li>{ JSON.stringify(this.state.listData) }</li> */}
              {/* { listItems } */}
            </ul>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    { this.Items(this.state.listData) }
                </tbody>
            </Table>
          </Row>
        </Container>
      );
    }
  }

export default TodoList;
