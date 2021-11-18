import React from 'react';
import Banner from '../Banner/Banner';
import Lipstic from '../Lipstic/Lipstic';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Products></Products>
            </div>

            <div>
                <Reviews></Reviews>
            </div>
            <div>
                <Lipstic></Lipstic>
            </div>

        </div>
    );
};

export default Home;