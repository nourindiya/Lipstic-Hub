import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const history = useHistory();
    const location = useLocation()
    const url = location.state?.from || '/home';

    const { emailRegistration, setUser, error, setError, handleUserSave, updateDisplayName } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (userSubmition) => {
        const email = userSubmition.email;
        const password = userSubmition.password;
        const name = userSubmition.name;
        emailRegistration(email, password)
            .then((userCredential) => {

                // Signed in
                setError('')
                const registeredUser = userCredential.user;
                setUser({ email, displayName: name });
                handleUserSave(name, email);
                updateDisplayName(name);
                console.log(registeredUser);
                history.push(url);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

        reset();
    };



    return (
        <div>

            <Container>
                <div>
                    <h1 className="tittle"> Register Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input label="Name" required placeholder="Name" type="text"  {...register("name")} />
                        <br />
                        <br />
                        <input label="Email" required type="email" placeholder="Email"  {...register("email")} />
                        <br />
                        <br />
                        <input label="Password" required type="password" placeholder="PassWord" {...register("password")} />
                        <br />
                        <button type="submit" className="btn-2 m-2">Register</button>
                        <br />
                        or
                        <br />

                    </form>

                    <div>
                        <h1 className="pp text-danger">{error}</h1>
                    </div>

                    <div className="mb-5">
                        <Link to="/logIn">Log in Here</Link>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Register;