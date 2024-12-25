import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
   return (
      <>
         <hr />
         <footer className="   py-4">
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
               <div className="flex flex-col items-center justify-center">
                  <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                     <p className="text-sm">© 2024 | All rights reserved.</p>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}
