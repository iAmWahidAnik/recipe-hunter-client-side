import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const {login, googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            navigate('/')
        })
        .catch(error => {
            const message = error.message;
            setError(message);
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        login(email, password)
        .then(result => {
            const user = result.user;
            navigate('/')
        })
        .catch(error => {
            const message = error.message;
            setError(message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className='text-red-500 py-4'>{error}</p>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} action="">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    {/* <button >Login</button> */}
                                    <input type="submit" value="Login" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error mx-8 mb-4">Google Sign In</button>
                        <button className="btn btn-outline mx-8">gitHub Sign In</button>
                        <small className='text-center my-5'>new user ? go to <Link className='text-primary font-semibold' to='/register'>Register</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;