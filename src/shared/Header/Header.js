import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="nav" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Lipstic Hub</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link className="link" as={Link} to="/allProducts">All Products</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link className="link" as={Link} to="/contact">Contact</Nav.Link>
                        <Navbar.Text className="mx-2">

                        </Navbar.Text>
                        {/* {
                            user?.email ?
                        <Nav.Link as={Link} to="/login" className="btn-2"
                         onClick={logOut}>Log Out</Nav.Link>
                        : <Nav.Link className="link" as={Link} to="/login">Log In</Nav.Link>
                        } */}

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Header;