import React from 'react';
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    return (
        <div>
            <section>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold tracking-wider">Food Made With Love</h1>
                            <p className="mb-5 tracking-wide">take a slice of our perfect culinary heaven</p>
                            <button className="btn btn-primary">See Menu</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-14 m-5'>
                    {
                        chefData.map(chef => <ChefCard key={chef.chefId} chef={chef}></ChefCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;