import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Index extends React.Component {
    render() {
      return (
        <Container fluid>
            <Jumbotron fluid>
                <h1>Fluid jumbotron</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Jumbotron>
            
            <Row className="mb-5 d-flex justify-content-center">
              <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Row>

            <Row>
                <Col xs={4} className="mb-5 d-flex justify-content-center" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} className="mb-5 d-flex justify-content-center" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title 2</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle 2</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} className="mb-5 d-flex justify-content-center" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title 3</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle 3</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
      );
    }
  }

export default Index;
