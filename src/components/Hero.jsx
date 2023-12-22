import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className={
        theme === "business"
          ? `hero min-h-screen bg-base-200 text-white`
          : `hero min-h-screen bg-base-200 text-black`
      }
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://internom.mn/_next/image?url=https%3A%2F%2Freadercontent144355-prod.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Frcollection%2F6aF1x7qLhnDdEojc6cg1D.webp&w=1920&q=75"
          className="max-w-4xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Шинэ жилийн бэлгийн багц номууд
          </h1>
          <p className="py-6">
            Багц бүрт бэлгийн тор болон "Утга зохиол" цувралын тэмдэглэлийн
            дэвтэр дагалдана.
          </p>
          <button className="btn bg-orange-400 text-black">
            Дэлгэрэнгүй үзэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
