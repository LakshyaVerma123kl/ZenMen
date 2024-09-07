import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Doctor = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-6 h-screen">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-gray-600 text-base md:text-lg mb-2">
          8 Million+ Physician Ratings & Reviews
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Find Your Doctor Near You
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
          Search for doctors by name, hospital, or city
        </p>
        <div className="relative max-w-sm md:max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for a doctor, hospital, or city..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm md:text-base"
          />
          <FontAwesomeIcon
            icon={faLocationDot}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-sm md:text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default Doctor;
