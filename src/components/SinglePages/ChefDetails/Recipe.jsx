import React from 'react';
import { GoStar } from "react-icons/go";

const Recipe = ({recipe}) => {
    const {recipe_name, ingredients, cooking_method, rating} = recipe;
    return (
        <div className='h-full p-5 border rounded'>
            <h2 className='text-2xl text-primary font-semibold'>{recipe_name}</h2>
            <ul className='my-5 text-left'>
                {ingredients.map(ingredient => <li className='flex items-center gap-3'><GoStar className='text-primary'></GoStar> {ingredient}</li>)}
            </ul>
            <p className='mb-5'>{cooking_method}</p>
            <p>{rating}</p>
        </div>
    );
};

export default Recipe;