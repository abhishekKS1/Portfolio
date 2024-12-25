import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";
import pic from "../../public/man-on-computer-vector-45762875.avif";

export default function Home() {
   return (
      <>
         <div name="Home" className="     md:mt-16  min-h-[calc(100vh-60px)]  max-w-screen-2xl container mx-auto px-4 md:px-20 ">
            <div className="flex flex-col md:flex-row ">
               <div className="md:w-2/5 mt-12 md:mt-32 space-y-2 order-2 md:order-1">
                  {/* <span className="text-xl">Welcome to my feed</span> */}
                  <div className="space-x-1 flex text-2xl md:text-4xl">
                     <h1>Hey, I'm a</h1>

                     <ReactTyped
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={90}
                        backSpeed={30}
                        loop
                        className="text-blue-600 font-bold"
                     />
                  </div>
                  <br />
                  <p className="text-sm md:text-md text-justify">
                     My mission is to leverage my skills and creativity to deliver innovative solutions that fulfill client expectations and
                     contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new
                     challenges and opportunities to expand my horizons.
                  </p>
                  <br />
                  {/* social media icons */}
                  <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-x-6 items-center">
                     {/* //////////////// */}
                     <div className="space-y-2">
                        <h1 className="font-normal uppercase md:mt-7">Available on</h1>
                        <div className="flex space-x-5">
                           <a href="#" target="_blank">
                              <IoLogoGithub className="text-xl md:text-3xl cursor-pointer" />
                           </a>
                           <a href="https://linkedin.com/in/abhishek-kumar-sharma-" target="_blank">
                              <FaLinkedin className="text-xl md:text-3xl cursor-pointer" />
                           </a>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <h1 className="font-normal">Currently working with</h1>
                        <div className="flex space-x-5">
                           <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full " />
                           <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full " />
                           <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full " />
                           <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full " />
                        </div>
                     </div>
                  </div>
               </div>
               <div className=" md:mt-20 md:ml-64 order-1">
                  <img src={pic} alt="" className="rounded-full md:w-[400px] object-fill  md:h-[400px]" />
               </div>
            </div>
         </div>
         <hr />
      </>
   );
}
