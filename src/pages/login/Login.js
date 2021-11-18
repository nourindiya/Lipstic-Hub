import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';


const Login = () => {
    const history = useHistory();
    const location = useLocation()
    const url = location.state?.from || '/home';
    const { emailLogin, setUser, error, setError } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (userSubmition) => {
        const email = userSubmition.email;
        const password = userSubmition.password;
        emailLogin(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedinUser = userCredential.user;
                setUser(loggedinUser);
                history.push(url);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

        reset();
    };

    return (
        <>
            <Container>
                <div>
                    <h1 className="tittle">Account Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input label="Email" required placeholder="Email" type="email" {...register("email")} />
                        <br />
                        <br />
                        <input label="Password" required placeholder="Password" type="password"{...register("password")} />
                        <br />
                        <button type="submit" className="btn-2 m-2" >Login</button>
                        <br />
                        or
                        <br />

                    </form>
                    <div>
                        <h1 className="pp text-danger">{error}</h1>
                    </div>
                    <div className="mb-5">
                        <Link to="/register" >New Here ?</Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login;

