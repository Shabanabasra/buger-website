"use client";
import React from "react"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "./ProductCard";
import { Product } from "@/pages/api/types"

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1306449154/photo/delicious-double-cheese-beef-burger-consists-of-bun-bread-patty-pickle-onion-mayonaisse.webp')",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-full mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Delicious Burgers in Our Menu</h1>
          <p className="text-xl text-white">
            Explore our selection of mouth-watering burgers to order now!
          </p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddCart={addToCart} />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Your Cart Items
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center mb-6 transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 sm:w-24 sm:h-24"
                        />
                        <span className="ml-4 text-lg font-medium text-gray-800">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce((total, product) => total + product.price, 0)}
                    </span>

                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                      >
                        Proceed to Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-red-600 text-white py-3 px-8 rounded-lg ml-4 shadow-md hover:bg-red-700 transition duration-300"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-gray-600">Your Cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Checkout</h2>
              <p className="text-lg text-gray-600">
                Please confirm your order before proceeding
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setIsCheckout(false)}
                    className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                  >
                    Close
                  </button>

                  <button
                    onClick={() =>
                      alert("Order Confirmed — Will Deliver At Your Doorstep")
                    }
                    className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;