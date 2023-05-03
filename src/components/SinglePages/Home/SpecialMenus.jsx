import React from 'react';

const SpecialMenus = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 md:mx-20'>
            <div className='m-5'>
                <div className='pb-5'>
                    <img className='w-96 h-48 object-cover' src="https://www.thewholesomedish.com/wp-content/uploads/2019/04/The-Best-Classic-Hamburgers-550-500x375.jpg" alt="" />
                </div>
                <div className=''>
                    <h1 className='text-2xl font-semibold uppercase tracking-widest my-5 text-primary'>Classic Hamburger</h1>
                    <p className='text-gray-500'><small>Perfectly seasoned juicy homemade hamburgers. This easy recipe only needs a few ingredients. . .</small></p>
                </div>
            </div>
            <div className='m-5'>
                <div className='pb-5'>
                    <img className='w-96 h-48 object-cover' src="https://amandascookin.com/wp-content/uploads/2022/09/Korean-Fried-Chicken-RCSQ.jpg" alt="" />
                </div>
                <div className=''>
                    <h1 className='text-2xl font-semibold uppercase tracking-widest my-5 text-primary'>Fried Chicken</h1>
                    <p className='text-gray-500'><small>This fried chicken is known for its sweet and spicy glaze with a crisp and crunchy coating. . .</small></p>
                </div>
            </div>
            <div className='m-5'>
                <div className='pb-5'>
                    <img className='w-96 h-48 object-cover' src="https://www.thekitchenwhisperer.net/wp-content/uploads/2014/09/Stove-Top-Mac-Cheese.jpg" alt="" />
                </div>
                <div className=''>
                    <h1 className='text-2xl font-semibold uppercase tracking-widest my-5 text-primary'>Macaroni and Cheese</h1>
                    <p className='text-gray-500'><small>This baked mac and cheese is a family favorite recipe, loved by children and adults. . .</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default SpecialMenus;