import React from "react";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <div className="bg-appBlack px-[6rem] mx-auto lg:pt-10 text-white flex justify-between items-center">
      <h1 className="text-4xl scroll-mx-6 lg:text-5xl tracking-wide font-PPHatton w-full max-w-3xl">
        Immerse yourself in crystal-clear sound and comfort
      </h1>
      <div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
