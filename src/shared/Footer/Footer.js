import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMailBulk, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <Container className="footer">
                <Row className="pt-5 pb-4">
                    <Col sm={4}>
                        <p className="p">About Us</p>
                        <p>Lipstics Overview</p>
                        <p>Brands & Consumers</p>
                        <p>More About Us</p>
                    </Col>
                    <Col sm={4}>
                        <p className="p">Resources</p>
                        <p>Payments</p>
                        <p>Let Us Help you</p>
                        <p>Creat Account</p>
                        <p>Deals</p>
                    </Col>
                    <Col sm={4}>
                        <p className="p">Connect With US</p>
                        <p><FontAwesomeIcon className="blue" icon={faPhone} /> +0882932399 </p>
                        <p><FontAwesomeIcon className="red" icon={faMap} /> Long Island , USA</p>
                        <p><FontAwesomeIcon className="orange" icon={faMailBulk} /> Lipsticehub@gmail.com</p>
                        <p><FontAwesomeIcon icon={faLaptop} className="gray" /> @Lipstic_Hub</p>
                        <p></p>
                    </Col>
                    <div>
                        <p className="text-center pt-4 p">© CopyRight 2021 Lipstice Hub ,Long Island , USA</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;