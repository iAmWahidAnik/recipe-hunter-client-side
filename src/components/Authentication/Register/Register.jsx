import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {register} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form =  event.target;

        const name = form.name.value;
        const photoLink = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const repassword = form.repassword.value;

        setError('')
        if(password.length === 0 || email.length === 0){
            setError('email and password fields are mandatory')
            return;
        }
        if(password.length < 6){
            setError('password should contain minimum 6 character')
            return;
        }
        if(password !== repassword){
            setError('please match your password properly')
            return;
        }

        console.log(name, photoLink, email, password, repassword);

        register(email, password)
        .then(result => {
            const user = result.user;
            user.displayName = name;
            user.photoURL = photoLink;
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
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-5">Register now!</h1>
                        <p className='text-red-500 py-4'>{error}</p>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} action="">
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
                        <p className='text-center mb-5'><small>already have an account? go to <Link className='text-primary font-semibold' to='/login'>Log-in</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;