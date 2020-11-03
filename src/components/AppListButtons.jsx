import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class AppComponent extends React.Component {
  delete = () => {
    this.props.delteItem(this.props.id);
  };

  select = () => {
    this.props.selectItem(this.props.id);
  };

  render() {
    return (
      <span>
        <Button variant="outline-success" onClick={this.select}>
          Update
        </Button>
        <Button variant="outline-danger" onClick={this.delete}>
          Delete
        </Button>
      </span>
    );
  }
}

AppComponent.propTypes = {
  id: PropTypes.any,
  selectItem: PropTypes.func,
  delteItem: PropTypes.func,
};

export default AppComponent;
