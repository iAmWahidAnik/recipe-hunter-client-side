import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://elements-cover-images-0.imgix.net/03b3a4e8-1fd1-4d0d-ae8d-752bb74f3deb?auto=compress%2Cformat&fit=max&w=2740&s=486d452e0b68d7bbfe78683acd38f159")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;