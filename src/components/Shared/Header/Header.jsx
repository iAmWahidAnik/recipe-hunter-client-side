import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-100">
                <div className="">
                    <Link className='btn btn-ghost normal-case text-xl'>Cuisine's Chef</Link>
                </div>
                <div className='mx-auto font-semibold'>
                    <Link className='mx-2'>Home</Link>
                    <Link className='mx-2'>Blog</Link>
                    <Link to='/login' className='mx-2'><button className='btn btn-primary'>Login</button></Link>
                </div>
                <div className="flex-none">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.dribbble.com/users/1358284/screenshots/6958606/logo_30.png" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;