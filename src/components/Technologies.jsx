import React from "react";
import reactlogo from "../../public/new_react-logo-png_seeklogo-273845.png";
import nodelogo from "../../public/new_node-js-logo-png_seeklogo-273750.png";
import expresslogo from "../../public/new_express.png";
import mongodblogo from "../../public/new_mongodb-logo-D13D67C930-seeklogo.com.png";
import html from "../../public/new_html5-without-wordmark-color-logo-png_seeklogo.png";
import css from "../../public/new_css-3-logo-png_seeklogo-426083.png";
import js from "../../public/new_javascript-js-logo-2949701702-seeklogo.com.png";
import git from "../../public/new_git-logo-png_seeklogo-273180.png";
import github from "../../public/new_github-logo-2E3852456C-seeklogo.com.png";
import tailwind from "../../public/new_tailwind-css-logo-png_seeklogo-354675.png";

export default function Technologies() {
   const cardItem = [
      { id: 1, logo: reactlogo, name: "React" },
      { id: 2, logo: nodelogo, name: "Node" },
      { id: 3, logo: expresslogo, name: "Express.js" },
      { id: 4, logo: mongodblogo, name: "MongoDB" },
      { id: 5, logo: tailwind, name: "Tailwind CSS" },
      { id: 6, logo: js, name: "JavaScript" },
      { id: 7, logo: css, name: "CSS" },
      { id: 8, logo: html, name: "HTML" },
      { id: 9, logo: git, name: "Git" },
      { id: 10, logo: github, name: "GitHub" },
   ];

   return (
      <div name="Technologies" className="  max-w-screen-2xl container mx-auto px-4 md:px-20 ">
         <div className="md:mb-16 mb-12">
            <h1 className="text-3xl font-semibold my-16 ml-8 md:ml-0 underline">Technologies</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 my-2 gap-4">
               {cardItem.map(({ id, logo, name }) => (
                  <div
                     key={id}
                     className="flex flex-col items-center justify-center mt-1  rounded-full md:w-[210px] md:h-[210px] p-3 cursor-pointer hover:scale-105 duration-300">
                     <img src={logo} alt={name} className="w-[80px] h-[80px] " />
                     <div className="text-center mt-3 font-semibold">{name}</div>
                  </div>
               ))}
            </div>
         </div>
         <hr />
      </div>
   );
}
