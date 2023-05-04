import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const [chef, setChef] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  },[]);
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes,recipes } =
        chef;
    console.log(recipes);
  return (
    <div>
          <div style={{
          height:'500px'
      }} className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={chefPicture}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
                      <h1 className="text-5xl font-bold">{ chefName}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
