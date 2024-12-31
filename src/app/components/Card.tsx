import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Delicious Burgers
        </h2>
        <p className="text-white mb-4">
          Experience the juiciest burgers in town made with fresh ingredients
          and grilled to perfection.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-900 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Coming Soon: Our New Burger Launchers
        </h3>
        <ul className="text-white">
          <li className="mb-4">
            <strong className="text-white">Cheesy BBQ Bacon Burger!</strong> <br />
            A mouthwatering blend of cheddar cheese, crispy bacon, and BBQ sauce.
          </li>
          <li className="mb-4">
            <strong className="text-white">Spicy Jalapeño Burger!</strong> <br />
            A fiery delight topped with fresh jalapeños and chipotle mayo.
          </li>
          <li className="mb-4">
            <strong className="text-white">Mushroom Swiss Burger!</strong> <br />
            Juicy beef patty with melted Swiss cheese for a rich, savory taste.
          </li>
          <li className="mb-4">
            <strong className="text-white">Avocado Veggie Burger!</strong> <br />
            A delicious plant-based option featuring a grilled veggie patty.
          </li>
          <li className="mb-4">
            <strong className="text-white">Buffalo Chicken Burger!</strong> <br />
            Crispy chicken tossed in spicy buffalo sauce.
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="https://media.istockphoto.com/id/1400656321/photo/homemade-cheese-smash-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=GiRXphCx76hdKdz0K4wQRymuqVCnvQ3bZOFOopMdLFk="
          alt="delicious burger"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;