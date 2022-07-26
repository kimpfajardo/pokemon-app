import React from "react";

const Card = ({ children, color = null }) => {
  return (
    <div
      className={`p-10 border w-full ${
        color
          ? color === "blue"
            ? "bg-white hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-500"
            : "bg-white hover:bg-gradient-to-br hover:from-red-300 hover:to-red-500"
          : "bg-white"
      } border-gray-300 hover:shadow-lg transition-all duration-300 group relative`}
      style={{ borderRadius: "20px", maxWidth: '600px' }}
    >
      {children}
    </div>
  );
};

export default Card;
