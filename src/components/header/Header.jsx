import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="w-full flex justify-center items-center pt-10 pb-10 md:py-20 md:pt-32 bg-violet-300 header"
      // style={{ borderRadius: "0 0 60% 60%" }}
      data-aos="fade-down"
      data-aos-delay="1000"
    >
      <div>
        <img className="h-16 sm:h-24 mb-5 sm:mb-10 mx-auto" src="/pokemon.png" />
        <h2 className="text-center text-white font-bold text-sm md:text-xl">{title}</h2>
      </div>
    </div>
  );
};

export default Header;
