import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const selectedProduct = products.slice(0, 6)

    return (
        <div>
            <p className="tittle fw-bold pt-5">Featured Lipstics</p>
            <div className="service-container">
                {
                    selectedProduct.map(product =>
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

export default Products;