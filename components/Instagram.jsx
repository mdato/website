import React from "react";
import InstagramImg from "./InstagramImg";
//import { InstagramData } from "./InstagramData";
//import Image from "next/image";
// si tengo imagenes locales las tengo que importar todas aquí
//import img1 from '../public/assets/img1.jpg'
import img1 from "../public/assets/jodri.jpg";
import img2 from "../public/assets/catalog.jpg";
import img3 from "../public/assets/expense.jpg";
import img4 from "../public/assets/itunes.jpg";
import img5 from "../public/assets/lyrics.jpg";
import img6 from "../public/assets/twitch.jpg";

import img7 from "../public/assets/book.jpg";
import img8 from "../public/assets/music.jpg";
import img9 from "../public/assets/prono.jpg";
import img10 from "../public/assets/paises.jpg";
import img11 from "../public/assets/netflix.jpg";
import img12 from "../public/assets/nhost.jpg";

import img13 from "../public/assets/reactshop.jpg";
import img14 from "../public/assets/cryptos.jpg";
import img15 from "../public/assets/vuetodo.jpg";
import img16 from "../public/assets/omdb.jpg";
import img17 from "../public/assets/seismic.jpg";
import img18 from "../public/assets/usa.jpg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">
        Follow me on{" "}
        <a href="https://bacode.com.ar" target="_blank" rel="noreferrer">
          <span className="text-3xl cursor-pointer hover:text-gray-500">
            BACode
          </span>
        </a>
      </p>
      <p className="pb-4"></p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <a href="https://jfdato.com.ar" target="_blank" rel="noreferrer">
          <InstagramImg socialImg={img1} />
        </a>
        <a
          href="https://catalog10.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img2} />
        </a>
        <a
          href="https://expenses1.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img3} />
        </a>
        <a
          href="https://itunes-vue.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img4} />
        </a>
        <a
          href="https://lyricssearch.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img5} />
        </a>
        <a
          href="https://twitch88.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img6} />
        </a>

        <a
          href="https://listofbook.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img7} />
        </a>
        <a
          href="https://musplay8.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img8} />
        </a>
        <a href="https://clima1.netlify.app" target="_blank" rel="noreferrer">
          <InstagramImg socialImg={img9} />
        </a>
        <a
          href="https://infocountry.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img10} />
        </a>
        <a
          href="https://netflix8.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img11} />
        </a>
        <a
          href="https://notes-nhost.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img12} />
        </a>

        <a href="https://shop55.netlify.app" target="_blank" rel="noreferrer">
          <InstagramImg socialImg={img13} />
        </a>
        <a href="https://crypto88.netlify.app" target="_blank" rel="noreferrer">
          <InstagramImg socialImg={img14} />
        </a>
        <a href="https://todo44.netlify.app" target="_blank" rel="noreferrer">
          <InstagramImg socialImg={img15} />
        </a>
        <a href="https://omdb8.netlify.app" target="_blank" rel="noreferrer">
          <InstagramImg socialImg={img16} />
        </a>
        <a
          href="https://seismic8.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={img17} />
        </a>
        <a href="https://usa3d.netlify.app" target="_blank" rel="noreferrer">
          <InstagramImg socialImg={img18} />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
