import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

export default function App() {
   return (
      <>
         <div>
            {" "}
            <Navbar />
            <Home />
            <Projects />
            <Technologies />
            <About />
            <Contact />
            <Footer />
         </div>
         <Toaster />
      </>
   );
}
