import React from "react";
import Navbar from "../components/Navbar";
import data from "../utils/products.json";

import PaymentInfo from "../components/PaymentInfo";
import Basket from "../components/Basket";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-10 mt-16">
        <div className="flex gap-5 ">
          <div className="w-[70%]">
            <Basket data={data} />
          </div>

          {/***tootsoo****/}

          <div className="w-[30%] flex flex-col gap-5 text-white">
            <h1 className="font-bold text-lg">Захиалгын мэдээлэл</h1>
            <PaymentInfo data={data} />

            <p className="text-xs">
              Та гишүүнчлэлийн картаар энэхүү худалдан авалтаас 5880 бонус оноо
              хуримтлуулах боломжтой.
            </p>
            <Link to="/checkout/address" className="btn bg-orange-500 text-black rounded-md">
              Захиалах
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
