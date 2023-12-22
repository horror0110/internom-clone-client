import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { MdShoppingCart } from "react-icons/md";
import NavbarDropdown from "./NavbarDropdown";
import menuItem from "../utils/menuItem.json";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <>
      <div className="flex items-center justify-between bg-black px-10 py-5 text-white">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Internom_logo.png/1200px-Internom_logo.png"
            width={130}
            height={130}
            className="object-cover"
          />
        </Link>

        <div>
          <SearchBar />
        </div>

        <NavbarDropdown />

        <Link to="/cart" className="flex items-center gap-1">
          <div className="relative">
            <MdShoppingCart color="white" size={25} />
            <span className="absolute bg-orange-400 rounded-full px-1 text-[14px] text-black top-[-14px] right-[-5px]">
              0
            </span>
          </div>

          <span>Сагс</span>
        </Link>
      </div>

      {/*** menu items ***/}
      <div className="flex gap-5 items-center px-10 py-5 bg-[#333] text-white text-xs font-bold">
        {menuItem.map((item, index) => (
          <span
            key={item.id}
            className={
              item.subcategories ? `dropdown dropdown-hover` : "dropdown"
            }
          >
            <div className="flex items-center gap-1">
              {item.title} {item.subcategories && <FaAngleDown />}
            </div>

            <ul
              tabIndex={0}
              className={
                theme === "business"
                  ? `dropdown-content flex flex-col gap-5 z-[1] menu p-5 shadow rounded-box w-screen h-screen bg-base-200`
                  : `dropdown-content flex flex-col gap-5 z-[1] menu p-5 shadow rounded-box w-screen h-screen bg-white text-black `
              }
            >
              <div className="flex items-center gap-1">
                {item.title} <FaAngleRight />
              </div>

              {item.subcategories &&
                item.subcategories.map((el, index) => (
                  <div key={index} className="flex flex-col">
                    <h1 className="border-b-[2px] border-b-orange-400 w-max mb-2 pb-1">
                      {el.content}
                    </h1>

                    {el.items &&
                      el.items.map((el, index) => (
                        <Link to="/categories/uran-zohiol" className="text-gray-400" key={el.id}>
                          {el.title}
                        </Link>
                      ))}
                  </div>
                ))}
            </ul>
          </span>
        ))}
      </div>
    </>
  );
};

export default Navbar;
