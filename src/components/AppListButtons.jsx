import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class AppComponent extends React.Component {
    delete = () => {
        this.props.updateItem(this.props.id)
    }

    update = ()=>{
        this.props.delteItem(this.props.id)
    }

    render(){
        return (
            <span>
                <Button variant="outline-success" onClick={this.delete}>Update</Button>
                <Button variant="outline-danger" onClick={this.update}>Delete</Button>
            </span>
        );
    }
}

export default AppComponent;
