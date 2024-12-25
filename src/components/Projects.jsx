import React from "react";

import ecomMernApp from "../../public/FireShotCapture-Shopgeeek-shopgeeek.vercel.app.png";
import mernFoodStore from "../../public/FireShotCapture-Yumhoney-tomato-ruby.vercel.app.png";

export default function Projects() {
   const cardItem = [
      { id: 1, logo: ecomMernApp, name: "End to End Ecommerce Web App (MERN)", link: "https://shopgeeek.vercel.app/" },
      { id: 2, logo: mernFoodStore, name: "Food Store Web App (MERN)", link: "https://tomato-ruby.vercel.app/" },
   ];
   return (
      <div name="Projects" className="md:ml-12  md:min-h-screen max-w-screen-2xl container mx-auto px-2 md:px-10">
         <div className="md:mb-28">
            <h1 className="text-3xl font-semibold md:mt-16 underline  ">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-1">
               {cardItem.map(({ id, logo, name, link }) => (
                  <a href={link} target="_blank" key={id}>
                     <div className="my-2 flex flex-col items-center justify-center md:w-[490px] md:h-[530px]  rounded-lg   cursor-pointer  ">
                        <div>
                           <div className="text-center hover:underline font-bold  mb-9 text-xl mt-3">{name}</div>
                        </div>
                        <img
                           src={logo}
                           alt={name}
                           className="md:w-[400px] md:h-[400px] w-[250px] h-[250px]   shadow-lg object-contain hover:scale-105 duration-300"
                        />
                     </div>
                  </a>
               ))}
            </div>
         </div>
         <hr />{" "}
      </div>
   );
}
