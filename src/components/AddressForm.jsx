import React from "react";

const AddressForm = () => {
  return (
    <div className="text-white my-10">
      <h1 className=" font-bold mb-5">Хүргэлтийн хаяг</h1>
      <span className="font-bold ">Шинэ хаяг бүртгүүлэх</span>
      <div className="flex items-center gap-3 my-5">
        <span>Дотоод</span>
        <input type="checkbox" className="toggle" />
        <span>Гадаад</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Хүлээн авагчийн нэр"
            className="input input-bordered w-full rounded-md "
          />
          <input
            type="text"
            placeholder="Утас"
            className="input input-bordered w-full rounded-md "
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Хот/Аймаг"
            className="input input-bordered w-full rounded-md "
          />
          <input
            type="text"
            placeholder="Дүүрэг/Сум"
            className="input input-bordered w-full rounded-md "
          />
        </div>
        <input
          type="text"
          placeholder="Хороо/Баг"
          className="input input-bordered w-full rounded-md "
        />
        <br />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Дэлгэрэнгүй хаяг"
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="Орцны код"
          className="input input-bordered w-full rounded-md "
        />
      </div>
    </div>
  );
};

export default AddressForm;
