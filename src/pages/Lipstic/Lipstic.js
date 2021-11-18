import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Lipstice.css"
const Lipstic = () => {
    return (
        <div>
            <Container className="expert-container pt-5 mb-5">
                <Row className="text-center justify-content-lg-center justify-content-sm-center mx-auto">
                    <Col>
                        <p className="tittle fw-bold pt-5">Lipstic Hub</p>
                        <p className="pp">
                            Based on cosmetic cases found at archaeological sites dating back to 5,000 years ago, it's thought that Ancient Sumerians were the first to wear lipstick. These ancient cosmetics were made by mixing crushed gemstones with oils and waxes. Ancient Egyptians also wore red lipstick as an indicator of social status.Are you a lipstick aficionado? Let’s be honest, we all are! When it comes to makeup, lipstick is considered the most essential item. It boosts your confidence and glams up your personality. Wondering which lipstick brands are the best in the market? Here, we have listed the 13 best lipstick brands available in India that look super flattering on all skin tones. Scroll down to check them out! Maybelline lipsticks provide all kinds of shades, from vivid, bold colors to nudes, browns, pinks, reds, mauves, glitters, and more. This is the brand that lets your lips do the talking.
                        </p>
                        <button className="btn-2">Buy Now</button>
                    </Col>
                    <Col>
                        <img className="ex-img" src="https://image.freepik.com/free-vector/lipstic-samples-set_1284-11502.jpg" alt="" />
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Lipstic;