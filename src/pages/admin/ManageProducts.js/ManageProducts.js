import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageSingleProduct from './ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')

            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>

            <>
                <h1 className="tittle">Products</h1>
                <Container>

                    <table className="table">
                        <thead>
                            <tr className="m-5">
                                <th>Image</th>
                                <th >Product Name</th>
                                <th >Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <ManageSingleProduct
                                    key={product._id}
                                    product={product}
                                    products={products}
                                    setProducts={setProducts}
                                ></ManageSingleProduct>)
                            }
                        </tbody>
                    </table>
                </Container>
            </>
        </div>
    );


};

export default ManageProducts;