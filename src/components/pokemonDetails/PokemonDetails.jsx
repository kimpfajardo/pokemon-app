import React from "react";
import Type from "../pokemonType/Type";

const PokemonDetails = ({ details = null }) => {
  if (!details) return <div></div>;

  const { name, classification, types, height, weight, image, number } =
    details;
  return (
    <div className="flex pokemon-details">
      <div className="flex justify-center transition-all pokemon-img-container overflow-hidden w:1/4 sm:w-1/2 lg:w-48 lg:h-48 md:w-32 md:h-32 mr-5">
        <img
          className="w-full pokemon-img rounded-lg sm:object-contain sm:transform sm:scale-90 group-hover:scale-100 duration-300"
          src={image}
        />
      </div>
      <div className="sm:w-1/2 xl:w-80 lg:w-48 md:w-32 pokemon-info">
        <p className="mb-5 absolute top-0 right-0 mt-2 mr-2 transition duration-500 text-gray-200 group-hover:text-white text-3xl md:text-4xl lg:text-5xl">
          #{number}
        </p>
        <p className="text-xs font-bold uppercase text-gray-400 group-hover:text-gray-200">
          Name
        </p>
        <p className="text-xs lg:text-lg mb-3">{name}</p>
        <p className="text-xs font-bold uppercase text-gray-400 group-hover:text-gray-200">
          Classification
        </p>
        <p className="text-xs lg:text-lg mb-3">{classification}</p>
        <p className="text-xs font-bold uppercase text-gray-400 group-hover:text-gray-200">
          Types
        </p>
        <div className="flex mb-3">
          {types.map((item, index) => (
            <div className="text-xs lg:text-lg mr-2" key={index}>
              <Type type={item} />
            </div>
          ))}
        </div>
        <p className="text-xs font-bold uppercase text-gray-400 group-hover:text-gray-200">
          Height
        </p>
        <p className="text-xs lg:text-lg mb-3">
          {height.minimum} - {height.maximum}
        </p>
        <p className="text-xs font-bold uppercase text-gray-400 group-hover:text-gray-200">
          Weight
        </p>
        <p className="text-xs lg:text-lg mb-3">
          {weight.minimum} - {weight.maximum}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetails;
