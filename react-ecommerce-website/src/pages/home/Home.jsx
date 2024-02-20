/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collection from "./Collection";
import BestSeller from "./BestSeller";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collection />
      <BestSeller />
    </div>
  );
};

export default Home;
