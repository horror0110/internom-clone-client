import React from "react";

const Products = ({ data }) => {
  return (
    <div>
      {/** filter */}
      <div className="flex justify-end items-center gap-10 mb-5">
        <div className="flex gap-2">
          <h1>Зөвхөн үлдэгдэлтэй барааг харуулах</h1>
          <input type="checkbox" className="toggle toggle-success" />
        </div>

        <div>
          <select className="select w-full max-w-xs bg-[#333] rounded-lg text-[14px] ">
            <option selected>Энгийн</option>

            <option>Үнэ өсөхөөр</option>
            <option>Үнэ буурахаар</option>
            <option>Шинэ эхэндээ</option>
            <option>Хуучин эхэндээ</option>
          </select>
        </div>
      </div>

      {/***** products */}

      <div className="grid grid-cols-4 gap-3 text-white ">
        {data.map((product, index) => (
          <div className="w-[230px] border border-[#D8D8D8] rounded-md flex flex-col items-start ">
            <img
              src={product.images[0]}
              alt={product.title}
              className="object-contain mx-auto"
              width={170}
              height={300}
            />
            <div className=" flex flex-col gap-1 bg-[#333] w-full pl-3 h-full pb-5  ">
              <h1 className="text-[15px] font-semibold mt-2">
                {product.title}
              </h1>
              <span className="text-[14px] text-gray-500">
                {product.author}
              </span>
              <span className="text-blue-500 text-xs">{product.material}</span>
              <span className="font-bold text-lg">{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/***  pagination **/}
      <div className="join mt-10 ml-20">
        <button className="join-item btn btn-outline">Өмнөх</button>
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
        <button className="join-item btn btn-outline">Дараа</button>
      </div>
    </div>
  );
};

export default Products;
