import React from "react";
import express from "../../public/express.png";
import js from "../../public/js.jpg";
import mongodb from "../../public/mongodb.png";
import node from "../../public/nodejs.png";
import react from "../../public/reactjs.png";

export default function Portfolio() {
  const cardItem = [
    { id: 1, logo: node, name: "Nodejs" },
    { id: 2, logo: react, name: "React" },
    { id: 3, logo: express, name: "Express" },
    { id: 4, logo: mongodb, name: "MongoDB" },
    { id: 5, logo: js, name: "JavaScript" },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 my-5 gap-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={logo}
                alt=""
                className="w-[120px] h-[120px] p-1 rounded-full b-[2px]"
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 mt-1">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, dolorem.
                </p>
              </div>
              <div className="space-x-5 px-3 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-1 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//   <img src={logo} alt="" className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"/>
//                 <div>
//                     <div>{name}</div>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     </p>
//                     </div>
