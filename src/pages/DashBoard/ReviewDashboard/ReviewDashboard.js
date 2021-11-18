import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ReviewDashboard = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const reviewData = { ...data }
        fetch(`http://localhost:5000/reviews?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        alert('Thanks for your review')
        reset();
    };




    return (
        <div>
            <h1 className="tittle">Give Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input value={user.displayName} {...register("name")} />
                <br />
                <br />
                <textarea {...register("description")} />
                <br />
                <br />
                <input className="btn-2 mb-3" type="submit" />
            </form>
        </div>
    );
};

export default ReviewDashboard;