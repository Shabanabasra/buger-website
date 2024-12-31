import React from 'react';

const ReservationSectionItems = () => {
  return (
    <section className="bg-gradient-to-r from-black to bg-slate-800 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Make A Reservation</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reservation-date" className="text-white block mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="reservation-date"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reservation-time" className="text-white block mb-2">
              Select Time
            </label>
            <input
              type="time"
              id="reservation-time"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-950 mt-4"
            >
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSectionItems;