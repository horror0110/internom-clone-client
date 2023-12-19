import React from "react";
import { CiPen } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { FaSquarespace } from "react-icons/fa6";

const BottomDetail = ({ data }) => {
  return (
    <div className="flex gap-10  justify-center mx-20 my-5 border-t border-t-white pt-5">
      <div className="flex flex-col text-center items-center gap-1">
        <h1>АНГИЛАЛ</h1>
        <CiPen color="white" className="font-bold" size={30} />
        <span className="text-xs">{data[0].category}</span>
      </div>

      <div className="flex flex-col text-center items-center gap-1">
        <h1>ХУДАЛДААНД</h1>
        <span className="font-bold text-lg text-white">{data[0].born[0]}</span>
        <span className="text-xs">{data[0].born[1]}</span>
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
        <LuLibrary color="white" className="font-bold" size={30} />
        <span className="text-xs">{data[0].ISBN}</span>
      </div>

      <div className="flex flex-col text-center items-center gap-1">
        <h1>ХЭМЖЭЭС</h1>
        <FaSquarespace color="white" className="font-bold" size={30} />
        <span className="text-xs">{data[0].size}</span>
      </div>
    </div>
  );
};

export default BottomDetail;
