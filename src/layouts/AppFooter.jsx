import React from 'react';
// import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

import ReactLogo from 'assets/logo.svg';

class AppFooter extends React.Component {
    render() {
      return (
          <footer className="fixed-bottom">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={"https://react-bootstrap.netlify.app/logo.svg"}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' '}
                React Bootstrap
                {' '}
                <img
                    alt=""
                    src={ReactLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
            </Navbar>
          </footer>
      );
    }
  }

export default AppFooter;
