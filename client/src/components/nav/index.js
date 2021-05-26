import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Nav = () => {
    return (
        <Navbar bg="info" expand="md">
            <Link to="/">
                <Navbar.Brand>b00kzearch</Navbar.Brand>
            </Link>
        </Navbar>
    );
};

export default Nav;