import React from "react";

const Filter = ({ menuItem }) => {
  return (
    <div className="text-white">
      <h1 className="mb-2 font-bold text-[15px]">Идэвхтэй шүүлтүүр (2)</h1>
      <div className="flex gap-3 text-[14px]">
        <button className="border rounded-lg border-red-900 text-red-500  p-1">
          Ном X
        </button>
        <button className="border rounded-lg border-red-900 text-red-500  p-1">
          Спорт X
        </button>
      </div>
      <button className="text-blue-500 text-[14px] font-bold mt-2">
        Цэвэрлэх
      </button>

      <div className="flex flex-col gap-5 mt-10">
        <div>
          <h1 className="font-bold">Спорт</h1>
          <ul className="ml-5 text-[14px]">
            <li>Спорт:ерөнхий</li>
            <li>Спортын бусад төрөл</li>
            <li>Бөх</li>
            <li>Хурдан морь</li>
            <li>Бөмбөгтэй спорт</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Формат</h1>
          <ul className="ml-5 text-[14px]">
            <li>Зөөлөн хавтастай</li>
            <li>Хатуу хавтастай</li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-bold">Үнэ</h1>
          <ul className="ml-5 flex flex-col gap-2 text-[14px]">
            <li className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox rounded-full w-5 h-5"
              />{" "}
              10000-29900
            </li>
            <li className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox rounded-full w-5 h-5"
              />{" "}
              10000-29900
            </li>
            <li className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox rounded-full w-5 h-5"
              />{" "}
              10000-29900
            </li>
            <li className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox rounded-full w-5 h-5"
              />{" "}
              10000-29900
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
