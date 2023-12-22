import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
import PrintCompany from "../components/PrintCompany";
import Authors from "../components/Authors";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://internom-rest-api.vercel.app/api/v1/books", {
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <PrintCompany />
      <ProductSlider data={data} />
      <Authors />
      <Footer />
    </div>
  );
};

export default Home;
