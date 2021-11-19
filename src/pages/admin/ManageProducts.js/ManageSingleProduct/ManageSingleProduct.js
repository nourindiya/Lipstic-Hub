import React from 'react';
import { Link } from 'react-router-dom';

const ManageSingleProduct = ({ product, products, setProducts }) => {
    const { name, img, price, _id } = product;


    const handleProductDelete = (id) => {
        const procceed = window.confirm('Are you sure you want to delete?')
        if (procceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainigProducts = products.filter(singleProduct => singleProduct._id !== id);
                        setProducts(remainigProducts);
                    }
                })
        }
    }


    return (
        < tr>
            <td>
                <img style={{ width: '40px' }} alt="" src={img} />
            </td >
            <td>
                {name}
            </td >
            <td>
                $ {price}
            </td >
            <td>
                <button onClick={() => handleProductDelete(product._id)}

                    className="btn-2">Delete</button>
            </td>

        </tr >
    );
};

export default ManageSingleProduct;

