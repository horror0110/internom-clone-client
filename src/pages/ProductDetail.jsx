import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import data from "../utils/products.json";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiPen } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { FaSquarespace } from "react-icons/fa6";

const ProductDetail = () => {
  const [urt, setUrt] = useState("");
  const [process, setProcess] = useState("half");
  const [too, setToo] = useState([]);

  // option dotorh too
  useEffect(() => {
    const calculateOption = () => {
      const options = [];
      for (let i = 2; i < 60; i++) {
        options.push(i);
      }
      setToo(options);
    };

    calculateOption();
  }, []);

  // ehnii 120 ugiig awah detail medeelel
  const textConvert = () => {
    const wordsArray = data[0].detail.split(" ");

    // heden ug awahiig shiidne
    const first120Words = wordsArray.slice(0, 120);
    setUrt(first120Words.join(" "));
  };

  useEffect(() => {
    textConvert();
  }, []);

  // delgerengui
  const getFullDetail = () => {
    setUrt(data[0].detail);
    // tovch or tsaash unshih shiideh
    setProcess("full");
  };
  // huraangui
  const getHalfDetail = () => {
    textConvert();

    // tovch or tsaash unshih shiideh
    setProcess("half");
  };

  return (
    <div>
      <Navbar />

      <div className="m-16 flex gap-10">
        <div className="w-[70%] flex items-start gap-5">
          <img
            src={data[0].images[0]}
            alt="product-detail"
            className="object-contain rounded-sm"
            width={220}
            height={320}
          />

          <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold border-b border-b-[#C0C0C0]  pb-3">
              {data[0].title}
            </h1>
            <div className="flex flex-col gap-1 border border-orange-400 w-max p-2 text-xs rounded-md">
              <span className="text-white">{data[0].material}</span>
              <span className="text-red-400">{data[0].price}</span>
            </div>

            <p className="text-[14px]">{urt}</p>
            {process === "half" ? (
              <button
                className="flex items-center gap-1 text-teal-500 text-[15px]"
                onClick={getFullDetail}
              >
                <IoIosArrowDown />
                Цааш унших{" "}
              </button>
            ) : (
              <button
                className="flex items-center gap-1 text-teal-500 text-[15px]"
                onClick={getHalfDetail}
              >
                <IoIosArrowUp />
                Товч
              </button>
            )}
          </div>
        </div>

        <div className="border-[2px] rounded-lg flex flex-col gap-3 border-gray-500 w-[30%] p-5 h-max ">
          <h1 className="text-white text-[15px]">Онлайн үнэ</h1>
          <span className="text-red-300 text-xl font-bold">
            {data[0].price}
          </span>
          {data[0].balance ? (
            <span className="text-green-400">Үлдэгдэл байна.</span>
          ) : (
            <span>Дууссан.</span>
          )}

          <select className="select w-max bg-gray-800 rounded-md ">
            <option selected>1</option>

            {too.map((el) => (
              <option>{el}</option>
            ))}
          </select>

          <button className="btn bg-white text-black rounded-md">
            Сагсанд нэмэх
          </button>
          <button className="btn bg-orange-400 text-black rounded-md">
            Худалдаж авах
          </button>
        </div>
      </div>

      <div className="flex gap-10 flex justify-center mx-20 my-5 border-t border-t-white pt-5">
        <div className="flex flex-col text-center items-center gap-1">
          <h1>АНГИЛАЛ</h1>
          <CiPen color="white" className="font-bold" size={30} />
          <span className="text-xs">{data[0].category}</span>
        </div>

        <div className="flex flex-col text-center items-center gap-1">
          <h1>ХУДАЛДААНД</h1>
          <span className="font-bold text-lg text-white">{data[0].born[0]}</span>
          <span className="text-xs" >{data[0].born[1]}</span>
        </div>

        <div className="flex flex-col text-center items-center gap-1">
          <h1>БҮТЭЭЛИЙН ХЭЛ</h1>
          <span className="font-bold text-lg text-white">{data[0].lang[0]}</span>
          <span className="text-xs">{data[0].lang[1]}</span>
        </div>

        <div className="flex flex-col text-center items-center gap-1">
          <h1>НҮҮРНИЙ ТОО</h1>
          <span className="font-bold text-white text-lg">{data[0].page[0]}</span>
          <span className="text-xs">{data[0].page[1]}</span>
        </div>

        <div className="flex flex-col text-center items-center gap-1">
          <h1>ISBN-13</h1>
          <LuLibrary color="white" className="font-bold" size={30}  />
          <span className="text-xs">{data[0].ISBN}</span>
        </div>

        <div className="flex flex-col text-center items-center gap-1">
          <h1>ХЭМЖЭЭС</h1>
          <FaSquarespace color="white" className="font-bold" size={30}  />
          <span className="text-xs">{data[0].size}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
