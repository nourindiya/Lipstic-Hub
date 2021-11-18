import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        const email = { email: data.email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);

                }
            })
        reset();
    };

    return (
        <div>
            <h1 className="tittle mt-5">Make Admin</h1>
            <div sx={{ mx: 'auto', width: 400 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Email"
                        type="email"
                        style={{ width: 300 }}
                        {...register("email")}
                    />
                    <button className="btn-2 mx-3" type="submit">Add</button>
                </form>
                <br />
                {success && alert("Admin Added Successfully")}
            </div>

        </div>
    );


};

export default MakeAdmin;