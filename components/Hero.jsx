// rafce

import React from "react";
import Link from "next/link";

const Hero = ({heading, message}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
      <h2 className="text-5xl font-bold">{heading}</h2>
      <p className="py-5 text-xl max-w-[500px]">{message}</p>
      <button className="px-8 py-2 border"><Link href="https://bacode.com.ar">BACode</Link></button>
      </div>

    </div>
  );
};

export default Hero;
