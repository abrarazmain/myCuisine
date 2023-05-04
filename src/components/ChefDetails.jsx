import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { ToastContainer, toast } from "react-toastify";

const ChefDetails = () => {
  const [chef, setChef] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://assignment-10-server-tan.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    recipes,
    bio,
  } = chef;

  return (
    <div>
      <div
        style={{
          height: "520px",
        }}
        className="hero  bg-purple-200 my-12 text-purple-600"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={chefPicture}
            className="max-w-sm rounded-lg shadow-2xl mx-4 w-80"
          />
          <div>
            <h1 className="text-5xl font-bold">{chefName}</h1>
            <p className="py-2 font-bold">Short Description: {bio}</p>
            <p className="py-2 font-bold">
              Number of recipes: {numberOfRecipes}
            </p>
            <p className="py-2 font-bold">Liked: {likes}</p>
            <p className="py-2 font-bold">
              Year of Experience: {yearsOfExperience}
            </p>
          </div>
        </div>
      </div>
      <div>
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
          ))}
      </div>
    </div>
  );
};

export default ChefDetails;
