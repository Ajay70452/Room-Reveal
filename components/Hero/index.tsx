"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              
              <h1 id = 'shadow' className=" mb-5 pr-16 text-3xl font-bold text-brown1 xl:text-hero style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}">
                See It Before You Install:<br/>
                Wallpaper Made Easy<br/>
                With Room Reveal 
                
              </h1>
              <p className="text-xl text-brown1 font-medium">
                Bring your walls to life with a click
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get demo
                    </button>
                  </div>
                </form>

               
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
