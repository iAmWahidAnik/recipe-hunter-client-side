import React, { useState } from 'react';
import { GoStar } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import swal from 'sweetalert';

const Recipe = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false)

    if(favorite){
        swal("Good job!", "The recipe is your favorite!");
    }
    
    const { recipe_name, ingredients, cooking_method, rating } = recipe;
    // console.log(favorite);
    return (
        <div className='h-full p-5 border rounded'>
            <h2 className='text-2xl text-primary font-semibold'>{recipe_name}</h2>
            <ul className='my-5 text-left'>
                {ingredients.map(ingredient => <li className='flex items-center gap-3'><GoStar className='text-primary'></GoStar> {ingredient}</li>)}
            </ul>
            <p className='mb-5'>{cooking_method}</p>
            <p>{rating}</p>
            <button onClick={() => setFavorite(true)} disabled={favorite ? true : false} className='flex items-center gap-3 btn btn-primary my-5'>add to favorite <FcLike></FcLike></button>
        </div>
    );
};

export default Recipe;