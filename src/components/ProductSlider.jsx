import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../utils/products.json";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const nexto = () => {
    swiper.slideTo(swiper.activeIndex + 6); 
  };

  const backto = () => {
    swiper.slideTo(swiper.activeIndex - 6); 
  };
  return (
    <div>
      <div className="flex items-center justify-between ml-10 mr-20 my-10 gap-1 ">
        <h1 className="font-bold text-lg">Интерном - Топ 100</h1>
        <div className="flex gap-1">
          <div className="border border-white p-2 cursor-pointer">
            <FaAngleLeft onClick={backto} color="white" />
          </div>

          <div className="border border-white p-2 cursor-pointer">
            <FaAngleRight onClick={nexto} color="white" />
          </div>
        </div>
      </div>

      <Swiper
        className="mx-10"
        breakpoints={{
          // When window width is >= 640px
          390: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        speed={700}
        pagination={{ clickable: true }}
        slidesPerView={6}
      >
        <div className="">
          {data.map((product, index) => (
            <SwiperSlide key={product.id}>
              <Link to={`/product/${product.id}`} className="mx-auto">
                <img
                  src={product.images[0]}
                  className="object-cover"
                  alt={product.title}
                  width={180}
                  height={180}
                />
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-bold text-lg">{index + 1}</span>
                  <div>
                    <h1 className="text-teal-400">{product.title}</h1>
                    <span className="text-[13px] text-gray-400">
                      {product.material}
                    </span>
                  </div>
                </div>
                <div className="ml-7 font-bold">{product.price}</div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
