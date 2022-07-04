import Image from "next/image";
import React from "react";

import img1 from "../public/assets/hiragana.jpg";
import img2 from "../public/assets/tatoeba.jpg";
import img3 from "../public/assets/derdiedas.jpg";
import img4 from "../public/assets/ling2.jpg";
import img5 from "../public/assets/phrasal.jpg";


const Portfolio = () => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Some of our language apps</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4 bg-gray-700">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2 cursor-pointer">
          <a href="https://hiragana1.netlify.app" target="_blank" rel="noreferrer">
            <Image src={img1} 
            alt="/"
            layout="responsive"
            width="677"
            height="450"
            objectFit="cover"   
            />
          </a>
        </div>

        

        <div className="w-full h-full">
        <a href="https://derdiedas1.netlify.app" target="_blank" rel="noreferrer">

          <Image
             src={img3}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
          </a>
        </div>

        <div className="w-full h-full">
        <a href="https://ling10.netlify.app" target="_blank" rel="noreferrer">
          <Image
             src={img4}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
          </a>
        </div>

        <div className="w-full h-full">
        <a href="https://phrasalverbs.netlify.app" target="_blank" rel="noreferrer">

          <Image
             src={img5}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
          </a>
        </div>

        <div className="w-full h-full">
        <a href="https://tatoeba.netlify.app" target="_blank" rel="noreferrer">
          <Image
             src={img2}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
          </a>
        </div>

      </div>

      
    </div>
  );
};

export default Portfolio;
