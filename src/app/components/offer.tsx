"use client"
import React from "react";

type Offer = {
  tittle: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      tittle: "Happy Hour",
      description: "Get 50% off on all drinks from 5 AM to 7 AM.",
    },
    {
      tittle: "Family Meal Deal",
      description: "Order 2 main courses and get a family deal coupon.",
    },
    {
      tittle: "Weekly Brunch",
      description: "Enjoy a complimentary drink with your brunch.",
    },
    {
      tittle: "Mid-Night Deal",
      description: "One free complementary burger enjoy a drink in midnight deal.",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Special Offers</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 space-x-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition-transform transform overflow-auto scale-105 p-5"
            >
              <h3 className="text-2xl font-semibold text-red-700">{offer.tittle}</h3>
              <p className="text-slate-700 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;