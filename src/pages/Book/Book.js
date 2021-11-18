import React from 'react';
import { useForm } from 'react-hook-form';
const axios = require('axios');

const Book = ({ product }) => {



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        axios.post('http://localhost:5000/orders', data)
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
                <input placeholder="Enter Name" required {...register("name")} />
                <br />
                <br />
                <input placeholder="Enter Address" required  {...register("address")} />
                <br />
                <br />
                <input placeholder="Enter Phone" required  {...register("phoneNumber")} />
                <br />
                <br />
                <input className="btn-2" type="submit" />
                <br />

            </form>

        </div>
    );
};

export default Book;