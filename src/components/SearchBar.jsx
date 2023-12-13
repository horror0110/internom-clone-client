import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { GlobalContext } from "../context/GlobalContext";

const SearchBar = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-[800px] flex items-center h-[40px]">
      <select
        className={
          theme === "business"
            ? `select w-[10%] text-[12px] select-bordered select-xs h-full rounded-none rounded-l`
            : `select w-[10%] text-black text-[12px] select-bordered select-xs h-full rounded-none rounded-l`
        }
      >
        <option className="text-[14px] " selected>
          Бүгд
        </option>
        <option className="text-[14px] ">Ном</option>
        <option className="text-[14px] ">Цахим ном</option>
        <option className="text-[14px] ">Аудио ном</option>
        <option className="text-[14px] ">Тоглоом</option>
        <option className="text-[14px] ">Бичиг хэрэг</option>
        <option className="text-[14px] ">Бэлэг дурсгал</option>
      </select>

      <input
        type="text"
        placeholder="Хайх"
        className="input input-bordered h-full rounded-none w-[80%]"
      />
      <div className="bg-orange-400 h-full flex items-center justify-center px-2 rounded-r w-[5%]">
        <CiSearch size={25} color="black" />
      </div>
    </div>
  );
};

export default SearchBar;
