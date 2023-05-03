import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-primary">About Us</h1>
                        <p className="py-6">American cuisine consists of the cooking style and traditional dishes prepared in the United States. It has been significantly influenced by Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and many other cultures and traditions.</p>
                        <Link to='/'><button className="btn btn-primary">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;