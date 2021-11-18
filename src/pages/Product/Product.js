import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./Product.css"

const Product = (props) => {
    const { name, img, price, description, _id } = props.product
    return (
        <div>
            <div className="service pb-3 px-4 pt-2 text-center mx-auto">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="text-center">
                    <p className="tittle text-danger">Price : $ {price}</p>

                    <Link to={`/booking/${_id}`}> <button className="btn-2">Buy Now</button> </Link>

                </div>
            </div >
        </div>
    );
};

export default Product;