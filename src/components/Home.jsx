import React  from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <>
      <div
        className="hero rounded"
        style={{
          backgroundImage: `url("https://png.pngtree.com/background/20210711/original/pngtree-food-seasoning-food-banner-picture-image_1105676.jpg")`,
          height: "700px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome To <span className="text-purple-600">MyCuisine</span>
            </h1>
            <p className="mb-5">
              MyCuisine is a Thai recipe website that celebrates the unique
              flavors and aromas of Thai cuisine. Our website offers a vast
              collection of authentic Thai recipes that are easy to follow and
              recreate in your home kitchen.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-semibold text-center text-purple-700 uppercase my-3">
        Our Chefs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-auto my-12 mx-auto">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </>
  );
};

export default Home;
