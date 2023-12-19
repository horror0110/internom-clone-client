import React from "react";

const PaymentInfo = ({data}) => {
  return (
    <div className="flex border flex-col p-5 bg-bg-neutral-800  rounded-md">
      <div className="flex justify-between items-center gap-3">
        <h1 className="text-[14px]">{data[0].title}</h1>

        <div className="flex gap-3">
          <span className="bg-gray-500 rounded-md p-1 text-xs">x1</span>

          <span className="text-[14px]">{data[0].price}</span>
        </div>
      </div>

      <div className="flex justify-between mt-5 bg-gray-500 p-2 rounded-md">
        <h1>Төлөх дүн</h1>
        <span className="font-bold">196000</span>
      </div>
    </div>
  );
};

export default PaymentInfo;
