import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden  bg-gradient-to-r from-black to grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://media.istockphoto.com/id/1306449154/photo/delicious-double-cheese-beef-burger-consists-of-bun-bread-patty-pickle-onion-mayonaisse.webp?a=1&b=1&s=612x612&w=0&k=20&c=wz76Tvma3EgxupTHXWhvbK8-HK_nvit4x7aJPdRXsxY="
          alt="delicious burger banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now for Exclusive Burger Discount!
        </p>
        <button
          type="button"
          className="bg-green-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Exciting Deals Launch at 12 pm!
        </button>
      </div>
    </div>
  );
}
