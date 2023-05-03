import React from 'react';

const SpecialRecipes = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 lg:mx-10'>
            <div className='relative'>
                <div className='w-full h-96'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" alt="" />
                </div>
                <div className='bg-black bg-opacity-70 absolute inset-0 text-center flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-1000'>
                    <h1 className='text-3xl uppercase font-semibold mb-5 tracking-widest text-white'>ultimate combo</h1>
                    <button className='btn btn-primary'>see recipe</button>
                </div>
            </div>
            <div className='relative'>
                <div className='w-full h-96'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1568045244282-e63a8b6b2b3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className='bg-black bg-opacity-70 absolute inset-0 text-center flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-1000'>
                    <h1 className='text-3xl uppercase font-semibold mb-5 tracking-widest text-white'>special ices</h1>
                    <button className='btn btn-primary'>see recipe</button>
                </div>
            </div>
          
            
            
        </div>
    );
};

export default SpecialRecipes;