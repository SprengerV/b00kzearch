import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  return (
    <Row>
      <Col xs="11" className="ms-auto me-auto">
        <Card id="headerBox" className="w-100">
          <Container id="header" className="d-flex flex-column justify-content-center">
            { props.location.pathname === '/' && <h2>Welcome to b00zearch</h2> }
            { props.location.pathname === '/search' && <h2>Search your favorite books</h2> }
            { props.location.pathname === '/saved' && <h2>Your saved books</h2> }
            <p>Powered by Google Books API</p>
          </Container>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Header);