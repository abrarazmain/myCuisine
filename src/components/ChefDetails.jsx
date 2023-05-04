import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const [chef, setChef] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${id}`)
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
  console.log(recipes);
  return (
    <div>
      <div
        style={{
          height: "500px",
        }}
        className="hero  bg-purple-200 my-12 text-purple-600"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl mx-4" />
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
          
    </div>
  );
};

export default ChefDetails;
