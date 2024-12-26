import React from "react";
import { useState } from "react";
import pic from "../../public/man-on-computer-vector-45762875.avif";
import { IoMdCodeWorking } from "react-icons/io";

import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

export default function Navbar() {
   const [menu, setMenu] = useState(false);
   const navItems = [
      { id: 1, text: "Home" },
      { id: 2, text: "Projects" },
      { id: 3, text: "Technologies" },
      { id: 4, text: "About" },
      { id: 5, text: "Contact" },
   ];
   return (
      <div className="                         max-w-screen-2xl z-10 container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0 bg-white">
         <div className="flex justify-between items-center h-16">
            <div className="flex space-x-2">
               {/* <img src={pic} className="h-12 w-12 rounded-full " alt="" /> */}
               <IoMdCodeWorking size={35} />
               <h1 className="font-normal text-md md:text-xl cursor-pointer">
                  Abhishe<span className="text-green-500 text-2xl">k</span> Kumar Sharma
                  {/* <p className="text-sm">Fullstack Web Developer</p> */}
               </h1>
            </div>
            {/* desktop navbar */}
            <div>
               <ul className="hidden md:flex space-x-8">
                  {navItems.map((item) => (
                     <li className="hover:scale-105 duration-200 cursor-pointer hover:text-green-500 hover:underline" key={item.id}>
                        <Link
                           to={item.text}
                           spy={true}
                           duration={400}
                           smooth={true}
                           offset={-80}
                           activeClass="active"
                           className="uppercase font-medium ">
                           {item.text}
                        </Link>
                     </li>
                  ))}
               </ul>
               <div onClick={() => setMenu(!menu)} className="md:hidden">
                  {menu ? <IoMdClose size={24} /> : <AiOutlineMenu size={24} />}
               </div>
            </div>
         </div>
         {/* mobile navbar */}
         {menu && (
            <div className="bg-white">
               <ul className=" md:hidden flex flex-col h-screen items-center justify-start  space-y-12">
                  {navItems.map((item) => (
                     <li
                        className="hover:scale-105 font-medium mt-20 hover:text-green-500 duration-200 uppercase underline  cursor-pointer"
                        key={item.id}>
                        <Link
                           onClick={() => setMenu(!menu)}
                           to={item.text}
                           spy={true}
                           duration={400}
                           smooth={true}
                           offset={-80}
                           activeClass="active">
                           {item.text}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}
