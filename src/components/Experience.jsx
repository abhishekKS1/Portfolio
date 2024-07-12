import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.jpg";
import git from "../../public/git.png";
import github from "../../public/github.png";
import tailwind from "../../public/tailwind.jpg";

export default function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: js, name: "JavaScript" },
    { id: 4, logo: git, name: "Git" },
    { id: 5, logo: github, name: "GitHub" },
    { id: 6, logo: tailwind, name: "Tailwind CSS" },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className=" ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 my-3 gap-7">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center mt-2 border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={logo}
                alt=""
                className="w-[100px] mt-2  rounded-full "
              />
              <div>
                <div className="">{name}</div>
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
