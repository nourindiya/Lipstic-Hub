import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';




const Allproducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div>
            <p className="tittle fw-bold pt-5">All Products</p>
            <div className="service-container">

                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}

                        ></Product>
                    )
                }

            </div>
        </div>
    );
};

export default Allproducts;