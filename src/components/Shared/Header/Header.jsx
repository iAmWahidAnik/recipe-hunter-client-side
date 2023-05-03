import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
        .then(result => {})
        .catch(error => {console.log(error.message);})
    }
    return (
        <div>
            <div className="navbar bg-slate-100">
                <div className="">
                    <Link to='/' className='btn btn-ghost normal-case text-xl'>Cuisine's Chef</Link>
                </div>
                <div className='flex-col gap-3 md:gap-0 md:flex-row mx-auto font-semibold'>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "text-primary mx-2" : "mx-2"
                    } >Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) =>
                        isActive ? "text-primary mx-2" : "mx-2"
                    } >Blog</NavLink>
                    <NavLink to='/about' className={({ isActive }) =>
                        isActive ? "text-primary mx-2" : "mx-2"
                    } >About</NavLink>
                    {user && <button onClick={handleLogOut} className='btn btn-primary mx-2'>Logout</button>}
                </div>
                <div className="flex-none tooltip tooltip-left" data-tip={user?.displayName && user?.displayName}>
                    {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative">
                        <div className="w-10 rounded-full">
                            {user ? <img src={user?.photoURL} /> : <Link to='/login' className='mx-2'><button className='btn btn-primary'>Login</button></Link> }
                        </div>
                        <div className='absolute inset-0 opacity-0 hover:opacity-100'>
                            <p>{user?.displayName}</p>
                        </div>
                    </label> */}
                    {user ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative">
                        <div className="w-20 rounded-full" >
                            <img src={user?.photoURL} />
                        </div>
                        <div className='absolute inset-0 opacity-0 hover:opacity-100'>
                            <p className='text-xs lowercase'>{user?.displayName ? user?.displayName : 'anonymous'}</p>
                        </div>
                    </label> : <Link to='/login' className='mx-2'><button className='btn btn-primary'>Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;