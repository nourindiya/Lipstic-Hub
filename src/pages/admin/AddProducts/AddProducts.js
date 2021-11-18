import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product has been added')
                    reset();
                }
            });
    };
    return (

        <div>
            <h1 className="tittle mt-3">Add Product</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Product Name"
                        style={{ width: 400 }}
                        {...register("name")}
                    />


                    <br /><br />
                    <textarea
                        placeholder="Description"
                        rows="4"
                        style={{ width: 400 }}
                        {...register("description")}
                    />
                    <br /><br />
                    <input
                        placeholder="Price"
                        style={{ width: 400 }}
                        {...register("price")}
                    />
                    <br />
                    <br />
                    <input
                        placeholder="Image URL"
                        style={{ width: 400 }}
                        {...register("img")}
                    />
                    <br />
                    <br />
                    <button type="submit" className="btn-2 mb-4">Post</button>

                </form>
            </div>
        </div>
    );





};

export default AddProducts;