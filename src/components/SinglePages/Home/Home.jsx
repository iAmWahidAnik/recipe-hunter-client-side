import React from 'react';
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';
import SpecialMenus from './SpecialMenus';
import SpecialRecipes from './SpecialRecipes';

const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
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
            <section className='my-20'>
                <h1 className='text-6xl text-center text-primary'>Our Special Menus</h1>
                <SpecialMenus></SpecialMenus>
            </section>
            <section className='my-20'>
            <h1 className='text-6xl text-center text-primary'>Our Special Chef's</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-14 m-5 py-10'>
                    {
                        chefData.map(chef => <ChefCard key={chef.chefId} chef={chef}></ChefCard>)
                    }
                </div>
            </section>
            <section className='my-20'>
            <h1 className='text-6xl text-center text-primary'>Our Special Recipes</h1>
            <p className='text-center text-primary my-5'><small>Note : hover to see info</small></p>
                <SpecialRecipes></SpecialRecipes>
            </section>
        </div>
    );
};

export default Home;