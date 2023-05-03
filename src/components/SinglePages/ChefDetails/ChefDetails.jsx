import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const ChefDetails = () => {
    const uniqueChef = useLoaderData();
    console.log(uniqueChef);
    const {chefId, chefpictureCoverLink, chefpictureProfileLink, chefName, chefDescription, likes, numberOfRecipes, yearsOfExperience, recipes, } = uniqueChef;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chefpictureCoverLink} alt="chef" className="rounded-xl h-96 w-full object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary">{chefName}</h2>
                    <p>{chefDescription}</p>
                    <p>Likes : {likes}</p>
                    <p>Recipes : {numberOfRecipes}</p>
                    <p>Experience : {yearsOfExperience}<small>y</small></p>
                    {/* <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-left my-5'>
                        {
                            recipes.map(recipe => <Recipe key={recipe.recipe_name} recipe={recipe}></Recipe>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;