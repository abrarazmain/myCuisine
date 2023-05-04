import React from "react";

const RecipeCard = ({ recipe }) => {
    const{recipeName,ingredients,cookingMethod,rating}=recipe
  return (
    <div>
      <div className="hero my-4 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
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

export default RecipeCard;
