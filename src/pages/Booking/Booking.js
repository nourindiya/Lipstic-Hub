import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { useHistory, useLocation, useParams } from 'react-router';
import Book from '../Book/Book';

const Booking = () => {



    const { id } = useParams();
    // const { user, status } = useAuth();
    const [productToOrder, setProductToOrder] = useState({});
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home'




    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => setProductToOrder(data))
    }, [])
    const { name, description, price, img } = productToOrder;



    return (
        <div>
            <h1 className="tittle">Product Details</h1>
            <hr />
            <div className="info-container w-50 m-5 mx-auto">
                <div className="img">
                    <img className="mt-3 w-50" src={img} alt="" />
                </div>

                <div className="info p-3">
                    <p className="tittle">{name}</p>
                    <p className="pp">{description}</p>
                    <p className="tittle text-danger "> $ {price}</p>
                    <div>
                        <button className="btn-2 px-5 " type="submit ">Buy</button>
                    </div>

                </div>

                <div className="mt-5">
                    <hr />
                    <h1 className="tittle">Confirm Purchase :</h1>
                    <Book

                        product={productToOrder}
                        kye={productToOrder._id}
                    >
                    </Book>
                    <hr />
                </div>
            </div>

        </div>
    );
};

export default Booking;