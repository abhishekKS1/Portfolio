import React from "react";

import ecomMernApp from "../../public/FireShotCapture-Shopgeeek-shopgeeek.vercel.app.png";
import mernFoodStore from "../../public/FireShotCapture-Yumhoney-tomato-ruby.vercel.app.png";
import { FaServer } from "react-icons/fa";
export default function Projects() {
   const cardItem = [
      { id: 1, logo: ecomMernApp, name: "End to End Ecommerce Web App (MERN)", link: "https://shopgeeek.vercel.app/" },
      { id: 2, logo: mernFoodStore, name: "Food Store Web App (MERN)", link: "https://tomato-ruby.vercel.app/" },
   ];
   return (
      <div name="Projects" className="md:ml-12  md:min-h-screen max-w-screen-2xl container mx-auto px-2 md:px-10">
         <div className="md:mb-28 mb-20">
            <h1 className="text-3xl font-semibold mt-8 ml-4 md:mt-16 underline  ">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-16 md:gap-0">
               {cardItem.map(({ id, logo, name, link }) => (
                  <a href={link} target="_blank" key={id}>
                     <div className="my-2 flex flex-col items-center justify-center md:w-[490px] md:h-[530px]  rounded-lg   cursor-pointer  ">
                        <div>
                           <div className="text-center hover:underline font-bold   mb-12 text-xl mt-3">{name}</div>
                        </div>
                        <div className="relative group ">
                           <img
                              src={logo}
                              alt={name}
                              className="md:w-[400px] md:h-[400px] w-[250px] h-[250px] md:group-hover:opacity-50    shadow-lg object-contain group-hover:scale-105 duration-300"
                           />
                           <div className="flex md:mt-0 md:ml-0 ml-2 mt-8 items-center justify-center md:invisible md:group-hover:visible md:absolute top-48 md:px-3 md:py-1 w-24 h-[35px] md:w-24 md:h-[40px]  rounded gap-3 left-40 bg-gray-800 text-white md:text-lg font-bold duration-100 ">
                              <FaServer />
                              <button>LIVE</button>
                           </div>
                        </div>
                     </div>
                  </a>
               ))}
            </div>
         </div>
         <hr />{" "}
      </div>
   );
}
