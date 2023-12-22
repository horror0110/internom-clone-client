import React from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Products from "../components/Products";
import menuItem from "../utils/menuItem.json";
import data from "../utils/products.json";
import Footer from "../components/Footer";
const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-10 my-5 justify-around">
        <Filter menuItem={menuItem} />
        <Products data={data} />
      </div>

      <Footer />
    </div>
  );
};

export default Category;
