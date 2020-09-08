import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.resource = this.props.resource;
        this.baseUrl =  process.env.REACT_APP_BASE_URL;
        this.url =  `${this.baseUrl}/${this.resource}`;
        this.state = {
            listData:[]
        };
    }

    list(data){
        this.setState({
            listData : [data]
        });
    }

    getList(){
        // let content = {
        //     method: "GET",
        //     headers:{
        //         'Authorization': `${localStorage.getItem("token")}`,
        //         'Content-Type': 'application/json',
        //     },
        // };

        fetch(this.url)
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
        );
    }
  }

export default TodoList;
