import React from "react";

const Footer = () => {
  return (
    <div className="py-5 w-full relative z-10">
      <p className="text-center text-gray-400">Made by Kim Fajardo</p>
      <p className="text-center text-gray-300">
        Code is available{" "}
        <a
          className="cursor-pointer underline font-bold"
          target={"_blank"}
          href="https://github.com/kimpfajardo/pokemon-app/tree/master"
        >
          here
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
