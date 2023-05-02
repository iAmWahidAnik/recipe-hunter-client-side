import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-5">Register now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form action="">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name here" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Link</span>
                                    </label>
                                    <input type="text" placeholder="photo link here" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email here" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Re-Type Password</span>
                                    </label>
                                    <input type="password" name='repassword' placeholder="re type password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    {/* <button >Login</button> */}
                                    <input type="submit" value="Register" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                        <p className='text-center mb-5'><small>already have an account? go to <Link className='text-primary font-semibold' to='register'>Log-in</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;