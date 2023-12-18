import React from "react";
import Navbar from "../components/Navbar";
import data from "../utils/products.json";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Cart = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-10 mt-16">
        <div className="">
          <div className="flex gap-5 ">
            <div className="flex flex-col gap-5 w-[70%]">
              <h1 className="text-lg font-bold text-white">Миний сагс</h1>
              {data.map((product, index) => (
                <div className="flex gap-10 justify-between items-start bg-neutral-800 border px-10 py-2 rounded-md">
                  <div className="flex gap-10 items-start">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="object-cover"
                      width={100}
                      height={200}
                    />
                    <div className="flex flex-col items-start">
                      <h1 className="text-blue-500 text-lg">{product.title}</h1>
                      <span className="text-white text-[14px] my-1">
                        {product.author}
                      </span>
                      <span className="text-xs">{product.ISBN}</span>
                      <span className="font-bold text-xs text-white my-1">
                        {product.material}
                      </span>
                      {product.balance ? (
                        <span className="text-xs text-green-400">
                          Бэлэн байна.
                        </span>
                      ) : (
                        <span className="text-xs text-red-400">Дууссан.</span>
                      )}
                      <button className="text-xs text-teal-500 mt-3">
                        Устгах
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span>{product.price}</span>

                    <div className="flex items-center">
                      <div className="border p-2">
                        <FaMinus size={8} />
                      </div>
                      <span className="border px-2 py-1 text-xs">0</span>
                      <div className="border p-2">
                        <FaPlus size={8} />
                      </div>
                    </div>

                    <span>{product.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/***tootsoo****/}

            <div className="w-[30%] flex flex-col gap-5 text-white">
              <h1 className="font-bold text-lg">Захиалгын мэдээлэл</h1>
              <div className="flex border flex-col p-5 bg-bg-neutral-800  rounded-md">
                <div className="flex justify-between items-center gap-3">
                  <h1 className="text-[14px]">{data[0].title}</h1>

                  <div className="flex gap-3">
                    <span className="bg-gray-500 rounded-md p-1 text-xs">
                      x1
                    </span>

                    <span className="text-[14px]">{data[0].price}</span>
                  </div>
                </div>

                <div className="flex justify-between mt-5 bg-gray-500 p-2 rounded-md">
                  <h1>Төлөх дүн</h1>
                  <span className="font-bold">196000</span>
                </div>
              </div>

              <p className="text-xs">
                Та гишүүнчлэлийн картаар энэхүү худалдан авалтаас 5880 бонус
                оноо хуримтлуулах боломжтой.
              </p>
              <button className="btn bg-orange-500 text-black rounded-md">
                Захиалах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
