import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <>
      <h1 className="text-5xl font-semibold text-center text-purple-700 uppercase my-3">
        Our Chefs
      </h1>
      <div className="grid grid-cols-3 mx-auto my-12">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </>
  );
};

export default Home;
