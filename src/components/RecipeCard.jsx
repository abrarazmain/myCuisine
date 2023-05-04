import React, { useState } from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import Rating from "react-rating";

const RecipeCard = ({ recipe }) => {
  const [fav, setFav] = useState(false);

  const { recipeName, ingredients, cookingMethod, rating } = recipe;
  return (
    <div>
      <div className="hero my-4 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="ml-6 w-4/12">
            <h1 className="text-5xl font-bold text-purple-600">{recipeName}</h1>
            <h2 className="my-6 font-bold text-2xl">
              Rating :
              {
                <Rating
                  readonly
                  placeholderRating={rating}
                  emptySymbol={<Star></Star>}
                  placeholderSymbol={<Star className="text-warning"></Star>}
                  fullSymbol={<StarFill className="bg-purple-600"></StarFill>}
                />
              }{" "}
            </h2>
          </div>
          <div className="w-8/12">
            <div className="my-3">
              <span className="text-2xl font-bold">Ingredients:</span>
              {ingredients &&
                ingredients.map((e, i) => (
                  <li key={i} className="font-semibold">
                    {e}
                  </li>
                ))}
            </div>
            <div className="font-semibold">
              <span className="text-2xl font-bold">Cooking Method:</span> <br />
              {cookingMethod}
            </div>
            <button
              disabled={fav}
              onClick={() => setFav(true)}
              className="btn btn-primary my-3"
            >
              Add To favorite
            </button>
            {fav && (
              <div className="toast">
                <div className="alert alert-info">
                  <div>
                    <span>Recipe of"{recipeName}" Added To favorite</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
