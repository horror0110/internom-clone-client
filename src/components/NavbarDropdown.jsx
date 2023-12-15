import React, { useContext, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const NavbarDropdown = () => {
  const { theme, setTheme, user } = useContext(GlobalContext);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("business");
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem("auth");

    window.location.reload();
  };

  useEffect(
    () => {
      if (theme === "light") {
        document.querySelector("html").setAttribute("data-theme", "light");
      } else {
        document.querySelector("html").setAttribute("data-theme", "business");
      }
    },
    [theme],
    [setTheme]
  );

  return (
    <div
      tabIndex={0}
      role="button"
      className=" flex flex-col dropdown dropdown-hover"
    >
      {user ? (
        <span className="text-xs">Сайн уу, {user.username}</span>
      ) : (
        <span className="text-xs">Нэвтрэх</span>
      )}
      <span className="flex items-center gap-2 font-bold text-[14px]">
        Профайл <FaAngleDown color="white" size="10" />
      </span>

      <ul
        tabIndex={0}
        className={
          theme === "business"
            ? `dropdown-content mt-[40px] flex flex-col z-[1] menu p-5 shadow bg-base-100  rounded-box w-[400px] absolute right-[-165px]`
            : `dropdown-content mt-[40px] flex flex-col z-[1] menu p-5 shadow bg-black  rounded-box w-[400px] absolute right-[-165px]`
        }
      >
        {!user ? (
          <Link
            to="/auth/login"
            className="btn w-[300px] mx-auto bg-orange-400 text-black"
          >
            Нэвтрэх
          </Link>
        ) : null}
        {!user ? (
          <Link to="/auth/signup" className="text-center mt-2">
            Шинэ үйлчлүүлэгч? Бүртгүүлэх.
          </Link>
        ) : null}

        <h1 className="my-5 font-bold text-lg">Таны профайл</h1>
        <div className="flex flex-col gap-5">
          <span>Хэрэглэгчийн мэдээлэл</span>
          <span>Миний захиалгууд</span>
          <span>Бүртгэлтэй хаягууд</span>
          <span>Гишүүнчлэл </span>
          <div className="flex items-center justify-between">
            <span>Харанхуй горим </span>
            <input
              type="checkbox"
              onChange={handleToggle}
              value="synthwave"
              className="toggle"
            />
          </div>
          {user ? <span onClick={handleLogout}>Гарах</span> : null}
        </div>
      </ul>
    </div>
  );
};

export default NavbarDropdown;
