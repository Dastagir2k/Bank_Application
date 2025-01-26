import React from "react";
import img from "./bank.jpg";
const Hero = () => {
  return (
    <div className="min-h-screen flex md:flex-row flex-col">
      <div className="md:w-1/2  text-2xl">
        <div className="md:m-28 m-10">
          <h1 className="font-bold text-3xl md:text-[80px]">All Payment By Click </h1>
          <p className="py-10 md:text-3xl">
            Experience seamless and secure transactions with our all-in-one
            banking platform. Whether it's managing your accounts, transferring
            funds, or making payments, everything is just a click away. Trust us
            for convenience, security, and reliability in all your financial
            needs.
          </p>

          <button className="bg-blue-600  text-white px-10 py-5 rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className=" md:w-3/5 mt-22 ">
        <img src={img} className="w" />
      </div>
    </div>
  );
};

export default Hero;
