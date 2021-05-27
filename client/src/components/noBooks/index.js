import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './noBooks.css';

const NoBooks = (props) => {
  return (
    <Row>
      <Col xs="8" id="noBooks" className="ms-auto me-auto d-flex justify-content-center align-items-center">
        { (props.location.pathname === '/search' || '/') && <span>Search for a book and the result will display here.</span> }
        { props.location.pathname === '/saved' && <span>You haven't added any books yet!</span> }
      </Col>
    </Row>
  );
};

export default withRouter(NoBooks);