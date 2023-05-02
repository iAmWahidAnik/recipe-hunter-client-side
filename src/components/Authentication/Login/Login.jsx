import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form action="">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    {/* <button >Login</button> */}
                                    <input type="submit" value="Login" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                        <button className="btn btn-outline btn-error mx-8 mb-4">Google Sign In</button>
                        <button className="btn btn-outline mx-8">gitHub Sign In</button>
                        <small className='text-center my-5'>new user ? go to <Link className='text-primary font-semibold' to='/register'>Register</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;