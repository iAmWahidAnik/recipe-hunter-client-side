import React from 'react';
import { FaBeer } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {chefId, chefpictureProfileLink, chefName, yearsOfExperience, likes, recipes } = chef;
    return (
        <div className=''>
            <div className="card card-side max-w-xl bg-base-100 shadow-xl">
                <figure><LazyLoad><img className='h-96 w-64 object-cover' src={chefpictureProfileLink} alt="Chef" /></LazyLoad></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary mb-5">{chefName}</h2>
                    <p>Experience : {yearsOfExperience}<small>y</small></p>
                    <p>Likes : {likes}</p>
                    <p>Number Of Recipes : {recipes.length}</p>
                    <div className="card-actions justify-start">
                        <Link to={`chef/${chefId}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;