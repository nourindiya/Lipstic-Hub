import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
const axios = require('axios');

const Book = ({ product }) => {

    const { name } = product

    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        const status = "Pending"
        const orderdata = { ...data, status, productName: name }

        axios.post('http://localhost:5000/orders', orderdata)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order Has been placed')
                    reset();
                }
            });
    }

    // console.log(data);




    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Name" required {...register("userName")} />
                <br />
                <br />
                <input placeholder="Enter Address" required  {...register("address")} />
                <br />
                <br />
                <input placeholder="Enter Email" required value={user.email}  {...register("email")} />
                <br />
                <br />
                <input className="btn-2" type="submit" />
                <br />

            </form>

        </div>
    );
};

export default Book;