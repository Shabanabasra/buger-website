import React from "react";

const products = [
  {
    id: 1,
    title: "Slaw Burger",
    category: "Fixing",
    price: "200.00",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrkM1JgRIQZGnnCTzuT7ZvmeMZEvx0Qy3oiVR21OXvCC-Zm8sOjJIAII&s",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Gypsy King Burger",
    category: "Delight",
    price: "250.00",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSJ3eqdz45ZYXpvBFpME4SNs4ODBHT91t34yllUeyLFfYtt04ei6UN6I&s",
    bgColor: "bg-green-300",
  },
  {
    id: 3,
    title: "Chicken Burger",
    category: "Fixing",
    price: "300.00",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qiKlSlYeGShEIZQxcE8gtMbg1mbEfO0dNoxTwN4PhLAdG3OsLHA_Jks&s",
    bgColor: "bg-amber-500",
  },
];

export default function Buggerlist() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-4">
      {products.map((product) => (
        <div
          key={product.id}
          className={`shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          {/* SVG Background */}
          <svg
            className="absolute bottom-0 left-0 mb-0 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 275)"
              fill="white"
            />
            <rect
              y="107.45"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.45)"
              fill="white"
            />
          </svg>

          {/* Image with Hover Transition */}
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-1"
              style={{
                background: "radial-gradient(circle, black, transparent 50%)",
                transform: "rotate(20deg) scale3d(1, 0.4, 1)",
                opacity: 0.1,
              }}
            ></div>
            <img
              src={product.imgUrl}
              alt={product.title}
              className="relative w-40 h-40 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Product Info */}
          <div className="relative text-white px-4 pb-4 mt-4">
            <span className="text-black opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="text-black font-semibold text-xl">
                {product.title}
              </span>
              <span className="black bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
