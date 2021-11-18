import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

const Header = () => {
    const { logout, user } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="nav" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Lipstic Hub</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link className="link" as={Link} to="/allProducts">All Products</Nav.Link>

                        {
                            user.email && <Nav.Link className="link" as={Link} to="/dashBoard">Dashboard</Nav.Link>
                        }

                        {
                            user.displayName ?
                                <p className="pp text-light m-3">
                                    <FontAwesomeIcon icon={faUser} className="text-light mx-2"> </FontAwesomeIcon>
                                    User : {user.displayName}</p> :
                                <p> </p>
                        }


                        {
                            user.email ?
                                <button className="btn-2" onClick={logout}>
                                    Log Out
                                </button>
                                :
                                <Nav.Link className="link" as={Link} to="/logIn">Log In</Nav.Link>
                        }

                        <Navbar.Text className="mx-2">

                        </Navbar.Text>


                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Header;