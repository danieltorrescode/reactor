import React from 'react';
import PropTypes from 'prop-types';
import { checkAuth } from 'tools/toolkit';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import AppListButtons from 'components/AppListButtons';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.resource = this.props.resource;
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.url = `${this.baseUrl}/${this.resource}`;
    this.state = {
      listData: [],
      tableHeader: ['ID', 'Name', 'Description', 'Actions'],
    };
  }

  list(data) {
    this.setState({
      listData: data,
    });
  }

  getList() {
    let content = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
    };

    let status = null;
    fetch(this.url, content)
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((json) => this.list(json))
      .catch((error) => {
        console.error('Error:', error);
        console.error('Error:', status);
        checkAuth(status);
      });
  }

  selectItem = (id) => {
    // let message = `Updated Item: ${id}`;
    // let title = 'updateItem';
    // let type = 'warning';
    // console.log(`${message} ${title} ${type}`);
    // this.state.listData.map(item => console.log(item));
    let item = this.state.listData.filter((item) => item._id === id);
    this.props.selectedItem(item[0]);
  };

  deleteItem = (id) => {
    let message = `Delete Item: ${id}`;
    let title = 'delteItem';
    let type = 'warning';
    let resource = `${this.url}/${id}`;

    let content = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
    };
    fetch(resource, content)
      .then((response) => response.json())
      .then((json) => {
        if (json.task._id) {
          console.log(json);
          console.log(`${message} ${title} ${type}`);
          // this.showMessage(json.text, 'success');
        }
        this.getList();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  tableItems(listItems) {
    return listItems.map((item) => (
      <tr key={item._id}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <AppListButtons
            id={item._id}
            selectItem={this.selectItem}
            delteItem={this.deleteItem}
          />
        </td>
      </tr>
    ));
  }

  tableHeader(headers) {
    return headers.map((item, index) => <th key={index}>{item}</th>);
  }

  componentDidMount() {
    // console.log('componentDidMount');
    this.getList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updateList !== this.props.updateList) {
      this.getList();
    }
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>{this.tableHeader(this.state.tableHeader)}</tr>
        </thead>
        <tbody>{this.tableItems(this.state.listData)}</tbody>
      </Table>
    );
  }
}

List.propTypes = {
  resource: PropTypes.string,
  updateList: PropTypes.bool,
  selectedItem: PropTypes.func,
};

export default List;
