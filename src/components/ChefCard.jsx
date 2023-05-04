import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    chefPicture,
    id,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    className = "text-2xl",
    } = chef;
    console.log(id);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-3">
        <figure>
          <img className="h-80 w-auto rounded" src={chefPicture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p className="text-xl">Years of experience: {yearsOfExperience}</p>
          <p className="text-xl">Number of recipes: {numberOfRecipes}</p>
          <p className="text-xl">Likes: {likes}</p>
          <div className="card-actions justify-end">
            <Link to={`/chefs/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
