import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Product() {
  return (
    <div className="Product">
      <Container>
        <Row>
          <Col md={4}>
            <Card className='card-container'>
              <a href="/Language">
                <Card.Img className="Cardimg" variant="top" src="/Images/EBOOKS.jpeg" />
              </a>
              <Card.Body>
                <Card.Title>eBooks</Card.Title>
                {/* <Card.Text>Id</Card.Text> */}
                <br />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='card-container'>
              <a href="/AudioBook">
                <Card.Img className="Cardimg" variant="top" src="/Images/Music.jpg" />
              </a>
              <Card.Body>
                <Card.Title>Music</Card.Title>
                {/* <Card.Text>Id</Card.Text> */}
                <br />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='card-container'>
              <a href="/VideoBook">
                <Card.Img className="Cardimg" variant="top" src="/Images/Videos3.jpeg" />
              </a>
              <Card.Body>
                <Card.Title>Videos</Card.Title>
                {/* <Card.Text>Id</Card.Text> */}
                <br />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
