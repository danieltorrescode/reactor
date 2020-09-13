import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import AppListButtons from 'components/AppListButtons';


class List extends React.Component {

    constructor(props) {
        super(props);
        this.resource = this.props.resource;
        this.baseUrl =  process.env.REACT_APP_BASE_URL;
        this.url =  `${this.baseUrl}/${this.resource}`;
        this.state = {
            listData:[],
            tableHeader: [
                "ID",
                "Title",
                "Body",
                "Actions",
            ],
        };
    }

    list(data){
        this.setState({
            listData : [data]
        });
    }

    getList(){
        fetch(this.url)
        .then(response => response.json())
        .then(json => this.list(json))
        .catch(error => {
            console.error('Error:', error)
        });
    }


    updateItem = (id) => {
        let message = `Updated Item: ${id}`;
        let title = "updateItem";
        let type = "warning";
        console.log(`${message} ${title} ${type}`)
        
    }

    delteItem = (id) => {
        let message = `Delete Item: ${id}`;
        let title = "delteItem";
        let type = "warning";
        console.log(`${message} ${title} ${type}`)
    }

    tableItems(listItems) {
        return listItems.map(
            (item) =>  
                <tr  key={item.id} >
                    <td>{ item.id}</td>
                    <td>{ item.title}</td>
                    <td>{ item.body}</td>
                    <td> 
                        <AppListButtons 
                        id={item.id} 
                        updateItem={this.updateItem} 
                        delteItem={this.delteItem} /> 
                    </td>
                </tr>
        );
    }

    tableHeader(headers) {
        return headers.map(
            (item,index) =>  
                <th key={index}>{ item }</th>
        );
    }

    componentDidMount() {
        // console.log("componentDidMount")
        this.getList();
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        { this.tableHeader(this.state.tableHeader) }
                    </tr>
                </thead>
                <tbody>
                    { this.tableItems(this.state.listData) }
                </tbody>
            </Table>
        );
    }
  }

export default List;
