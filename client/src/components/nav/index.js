import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav as Nv, Container, Row } from 'react-bootstrap';
import './nav.css';

const Nav = () => {
    return (
        <Navbar bg="info" expand="md">
            <Container fluid={ true }>
                    <Link to="/">
                        <Navbar.Brand id="brand">b00kzearch</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="nav-collapse"/>
                    <Navbar.Collapse id="nav-collapse" className="flex-row-reverse">
                        <Nv.Link>
                            <Link className="text-dark" to="/search">Search</Link>
                        </Nv.Link>
                        <Nv.Link>
                            <Link className="text-dark" to="/saved">Saved</Link>
                        </Nv.Link>             
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Nav;