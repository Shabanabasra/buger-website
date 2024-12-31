import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {/* First Image */}
            <div className="col-span-2 md:col-span-2 bg-gradient-to-r from-black to-gray-700 relative h-96">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Classic Bites"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/75"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                  Classic Bites
                </h3>
              </a>
            </div>

            {/* Remaining Images */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {/* Second Image */}
              <div className="bg-gradient-to-r from-black to-gray-700 flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg h-full"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhH6bS9cTs_ZNuV36IdGOocD37jPEBEjUrYjGsisrpiMt27CAYUltiiqk&s"
                    alt="Gourmet Grill"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/75"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Gourmet Grill
                  </h3>
                </a>
              </div>

              {/* Third Image */}
              <div className="bg-gradient-to-r from-black to-gray-700 flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg h-full"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtEptjzdFoS7WPAR7WBJrqDM4T-NIZFyQCc9E1XgwzCv8ZmDAChzx4YY&s"
                    alt="Spicy Masala"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/75"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Spicy Masala
                  </h3>
                </a>
              </div>

              {/* Fourth Image */}
              <div className="bg-gradient-to-r from-black to-gray-700 flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg h-full"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTL7IGKernPkQZbk5CId7WxKqN27usqquLcuUM5-8nAu-9cSaenNoDm0&s"
                    alt="Gourmet Delight"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/75"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Gourmet Delight
                  </h3>
                </a>
              </div>

              {/* Fifth Image */}
              <div className="bg-gradient-to-r from-black to-gray-700 flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg h-full"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzo4J-3bQcVnO3vXQXyOxcCshPOQhQ7RpZS7L-UIos10RlFVtPFZh0w&s"
                    alt="Ultimate Feast"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/75"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Ultimate Feast
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:max-h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg h-full"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt=" Veggle"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/75"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                  Veggle
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
