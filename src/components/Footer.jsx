import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-10 py-16 mt-16 bg-black text-white">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex gap-16 items-start text-[14px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-orange-500 text-lg">Интерном</h1>
              <Link>Арга хэмжээ</Link>
              <Link>Бидний тухай</Link>
              <Link>Гишүүнчлэл</Link>
              <Link>Манай дэлгүүрүүд</Link>
              <Link>Хамтран ажиллах </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-orange-500 text-lg">Тусламж</h1>
              <Link>Түгээмэл асуултууд</Link>
              <Link>Үйлчилгээний нөхцөл</Link>
              <Link>Нууцлалын бодлого</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-orange-500 text-lg">Холбоо барих</h1>
              <span>7577-7700</span>
              <span>info@internom.mn</span>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <img
              src="https://internom.mn/_next/image?url=%2Fassets%2Fcard.webp&w=256&q=75"
              className="object-cover"
              width={140}
              height={140}
            />

            <img
              src="https://internom.mn/_next/image?url=%2Fassets%2Fqpay.webp&w=48&q=75"
              className="object-cover rounded-md"
              width={40}
              height={40}
            />

            <img
              src="https://internom.mn/_next/image?url=%2Fassets%2Fmonpay.png&w=48&q=75"
              className="object-cover rounded-md"
              width={40}
              height={40}
            />

            <img
              src="https://internom.mn/_next/image?url=%2Fassets%2Fsocialpay.webp&w=48&q=75"
              className="object-cover rounded-md"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/*****/}

        <div className="flex flex-col gap-3">
          <h1 className="text-orange-500 text-lg font-bold">
            Амарном апп татах
          </h1>

          <img
            src="https://internom.mn/qr_link.webp"
            className="object-cover"
            width={160}
            height={160}
          />
          <img
            src="https://internom.mn/_next/image?url=%2Fassets%2Fappstore.png&w=256&q=75"
            className="object-cover"
            width={160}
            height={160}
          />
          <img
            src="https://internom.mn/_next/image?url=%2Fassets%2Fgplay.png&w=256&q=75"
            className="object-cover"
            width={160}
            height={160}
          />
          <img
            src="https://internom.mn/_next/image?url=%2Fassets%2Funshii-tsagaan.webp&w=256&q=75"
            className="object-cover mt-10"
            width={170}
            height={170}
          />
        </div>
      </div>

      <div className="flex justify-between mt-5 border-t border-t-white pt-10 text-xs">
        <div>
          <p>© 1614-1623 Интерном ХХК. Бүх эрх хуулиар хамгаалагдсан.</p>
          <span className="text-gray-400 mt-1">Хувилбар 2.11.39-rc.3</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="border-[2px] border-blue-700 p-2 rounded-full">
            <FaFacebookF size={16} />
          </div>
          <div className="border-[2px] border-blue-500 p-2 rounded-full">
            <FaTwitter size={16} />
          </div>
          <div className="border-[2px] border-red-700 p-2 rounded-full">
            <FaYoutube size={16} />
          </div>
          <div className="border-[2px] border-pink-500 p-2 rounded-full">
            <FaInstagram size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
