import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">The requested URL was not found on the server. <br /> That's all we know.</p>
                        <Link to='/'><button className="btn btn-primary">go to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;