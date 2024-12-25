import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
export default function Contact() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = async (data) => {
      const userInfo = {
         name: data.name,
         email: data.email,
         message: data.message,
      };
      try {
         await axios.post("https://getform.io/f/apjmjyqa", userInfo);
         toast.success("Message sent successfully!");
      } catch (error) {
         console.error(error);
         toast.error("Something went wrong");
      }
   };

   return (
      <>
         <div name="Contact" className="  md:mb-16  max-w-screen-2xl container mx-auto px-4 md:px-20 ">
            <h1 className="text-3xl font-bold underline my-16 mb-4 ">Contect me</h1>
            <span>Please fill out the form below to contact</span>
            <div className="flex flex-col items-center justify-center mt-16">
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  // action="https://getform.io/f/apjmjyqa"
                  // method="POST"
                  // we can easily directly use above both lines to directly submit form data to the server(getforms.io etc) but we will use standard way by axios etc...
                  // 2nd thing if you ever get the time so try to find the best use/stranth of dependencies/pkgs used in this project...

                  className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white w-96 px-8 py-6 rounded-xl">
                  <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                  <div className="flex flex-col mb-4">
                     <label className="block text-gray-700">Full Name</label>
                     <input
                        {...register("name", { required: true })}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="border-2 rounded-lg border-gray-400 p-2 "
                     />
                     {errors.name && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col mb-4">
                     <label className="block text-gray-700">Email</label>
                     <input
                        {...register("email", { required: true })}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email address"
                        required
                        className="border-2 rounded-lg border-gray-400 p-2 "
                     />
                     {errors.email && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col mb-4">
                     <label className="block text-gray-700">Message</label>
                     <textarea
                        {...register("message", { required: true })}
                        id="message"
                        name="message"
                        type="text"
                        placeholder="enter your query here"
                        required
                        className="border-2 rounded-lg border-gray-400 p-2 "
                     />
                     {errors.message && <span>This field is required</span>}
                  </div>
                  <button type="submit" className="bg-black  text-white    rounded-xl px-3 py-2 hover:bg-slate-700 duration-200">
                     Send
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}
