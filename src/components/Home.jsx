import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/man-on-computer-vector-45762875.avif";

export default function Home() {
   return (
      <>
         <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
               <div className="md:w-1/2 mt-12 md:mt24 space-y-2 order-2 md:order-1">
                  <span className="text-xl">Welcome to my feed</span>
                  <div className="space-x-1 flex text-2xl md:text-4xl">
                     <h1>Hello, I'm a</h1>
                     {/* <span >Developer</span> */}

                     <ReactTyped
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={70}
                        backSpeed={50}
                        loop
                        className="text-blue-700 font-bold"
                     />
                  </div>
                  <br />
                  <p className="text-sm md:text-md text-justify">
                     Welcome to my portfolio! I am an enthusiastic and motivated fresher with a strong passion for learning and
                     problem-solving. I focus on building practical skills and continuously improving through hands-on projects. Here, you
                     can explore my work, where I showcase the skills and knowledge I have gained so far. I am excited to grow and
                     contribute to meaningful projects in the tech industry.
                  </p>
                  <br />
                  {/* social media icons */}
                  <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-x-6 items-center">
                     <div className="space-y-2">
                        <h1 className="font-bold">Available on</h1>
                        <ul className="flex space-x-5">
                           <li>
                              <a href="#" target="_blank">
                                 <FaFacebookSquare className="text-2xl cursor-pointer" />
                              </a>
                           </li>
                           <li>
                              <a href="#" target="_blank">
                                 <FaLinkedin className="text-2xl cursor-pointer" />
                              </a>
                           </li>
                           <li>
                              <a href="#" target="_blank">
                                 <FaYoutube className="text-2xl cursor-pointer" />
                              </a>
                           </li>
                           <li>
                              <a href="#" target="_blank">
                                 <FaTelegramPlane className="text-2xl cursor-pointer" />
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className="space-y-2">
                        <h1 className="font-bold">Currently working on</h1>
                        <div className="flex space-x-5">
                           <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                           <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                           <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                           <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 md:mt-20 md:ml-32 order-1">
                  <img src={pic} alt="" className="rounded-full md:w-[450px] md:h-[450px]" />
               </div>
            </div>
         </div>
         <hr />
      </>
   );
}
