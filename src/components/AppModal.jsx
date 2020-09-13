import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        };
    }

    setShow(){
        this.setState({ show: !this.state.show });
    }

    render(){
        return (
            <Modal
                size="lg"
                show={this.props.show}
                onHide={this.props.showFormModal}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{ this.props.form}</Modal.Body>
            </Modal>
        );
    }
}

export default AppComponent;
