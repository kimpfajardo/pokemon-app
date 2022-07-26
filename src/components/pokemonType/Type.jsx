import React from "react";

const Type = ({ type }) => {
  const types = [
    {
      name: "fire",
      color: "#F08030",
    },
    {
      name: "flying",
      color: "#A890F0",
    },
    {
      name: "ice",
      color: "#98D8D8",
    },
  ];
  return (
    <div
      className="p-1 px-3 text-xs uppercase rounded-full text-white"
      style={{
        background: types.filter((item) => item.name === type.toLowerCase())[0]
          .color,
      }}
    >
      <pre>{type}</pre>
    </div>
  );
};

export default Type;
