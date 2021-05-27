import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Search = (props) => {
  return (<>
    <Row>
      <Col xs="8" className="ms-auto me-auto">
        <Card id="searchBox" className="w-100">
          <Container>
            <Col xs="12" md="8" lg="6" xl="5" className="ms-auto me-auto">
              <Form id="searchForm" className="d-flex w-100" onSubmit={ props.search }>
                <Form.Control type="text" placeholder="Enter search terms here"/>
                <Button id="searchBtn" variant="outline-info" type="submit">
                  &#9885;
                </Button>  
              </Form>
            </Col>
          </Container>
        </Card>
      </Col>
    </Row>
  </>);
};

export default Search;