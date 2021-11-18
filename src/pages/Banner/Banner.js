import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/liquidlipsticks-1527088262.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*"
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKltbF1Ih63P1ndNoGZxB_J2URM1PG-QfR8w&usqp=CAU"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyM7rpzvwvLfytG5XMYLX2YtUSEsysGgahYg&usqp=CAU"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;