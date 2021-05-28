import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import API from '../../controllers/api';
import './book.css';
const { saveBook, delBook } = API;

const Book = (props) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    (book !== props.data)
      ? setBook(props.data)
      : console.log();
  }, [book, props.data])
  
  const truncate = (event) => {
    const tag = book.title.split(' ').join('').replace(/[^A-Za-z0-9]/g, '');
    const desc = document.querySelector(`#${ tag }`);
    const func = {
      'More..': ({ target }) => {
        target.innerHTML = '..Less';
        desc.setAttribute('class', 'd-flex align-items-center');
      },
      '..Less': ({ target }) => {
        target.innerHTML = 'More..';
        desc.setAttribute('class', 'd-flex align-items-center text-truncate-container');
      }
    }
    func[event.target.innerHTML](event);
  };
  const addHandler = (event) => {
    const func = {
      '✛': ({ target }) => {
        saveBook(book)
          .then(res => {
            setBook(res.data);
            target.setAttribute('class', 'btn-outline-info addBook')
            target.innerHTML = '&#9866;';
          });
      },
      '⚊': ({ target }) => {
        delBook(book.id)
          .then(res => {
            target.setAttribute('class', 'btn-info addBook')
            target.innerHTML = '&#10011;';
          })
      }
    }
    func[event.target.innerHTML](event);
  };

  return (
    <Row>
      <Col xs="10" className="ms-auto me-auto">
        <Card className="book">
          <Container fluid={true} className="mt-3 mb-2">
            <Row>
              <Col xs="8" className="d-inline-flex ">
                <Container fluid={ true }>
                  <Row className="mb-1 mt-2">
                    <h3>{ book.title }</h3>
                  </Row>
                  <Row className="mb-2">
                    <ListGroup variant="flush" horizontal={ true } className="d-flex justify-content-around">
                      {(book.authors) && book.authors.map(auth => <ListGroup.Item>{ auth }</ListGroup.Item>)}
                    </ListGroup>
                  </Row>
                  <Row id={ (book.title) && book.title.split(' ').join('').replace(/[^A-Za-z0-9]/g, '') } className="d-flex align-items-center text-truncate-container">
                    <p className="text-justify">{ book.description }</p>
                  </Row>
                  <Row className="d-flex flex-row-reverse">
                    <Col md="10" lg="2" className="ms-auto me-auto me-lg-0">
                      <Button onClick={ truncate } variant="outline-info" className="w-100">More..</Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs="4" lg="3" className="d-inline-flex ms-auto me-auto">
                <Container className="d-flex flex-column justify-content-around">
                  <Row>
                    <img 
                      className="mr-3"
                      src={ book.image }
                      alt={ book.title }
                    />
                  </Row>
                  <Row>
                    <a href={book.link} rel="noreferrer" target="_blank">View on Google Books &#10064;</a>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Button onClick={ addHandler } variant="info" className="addBook">&#10011;</Button>
          </Container>
        </Card>
      </Col>
    </Row>
  );
};

export default Book;