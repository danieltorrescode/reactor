import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from 'react-bootstrap/Alert';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Alert
        show={this.props.show}
        variant={this.props.type}
        onClose={this.props.toggleMessage}
        dismissible
      >
        <Alert.Heading>{this.props.title}</Alert.Heading>
        <p>{this.props.message}</p>
      </Alert>
    );
  }
}

export default AppComponent;
