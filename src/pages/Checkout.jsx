import React from "react";
import Navbar from "../components/Navbar";
import data from "../utils/products.json";
import Steps from "../components/Steps";
import AddressForm from "../components/AddressForm";
import PaymentInfo from "../components/PaymentInfo";

const Checkout = () => {
  return (
    <div>
      <Navbar />

      <Steps />

      {/*****/}

      <div className="flex gap-5 mx-10 mt-10">
        <div className="w-[70%]">
          <AddressForm />
        </div>

        {/*****/}

        <div className="w-[30%] flex flex-col gap-5 text-white">
          <h1 className="font-bold text-lg">Захиалгын мэдээлэл</h1>
          <PaymentInfo data={data} />

          <button className="btn bg-orange-500 text-black rounded-md">
            Төлбөр төлөх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
