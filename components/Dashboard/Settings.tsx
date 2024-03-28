"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const options = [
    {
      name: "FAQs",
      img: "/images/icon/FAQ.svg",
      url: "/dashboard/settings/faqs",
    },
    {
      name: "Tutorials",
      img: "/images/icon/tutorials.svg",
      url: "/dashboard/settings/tutorials",
    },
    {
        name : "Help & Support",
        img : "/images/icon/help-support.svg",
        url : "/dashboard/settings/help-and-support"
    },
    {
      name: "Terms and Conditions",
      img: "/images/icon/document.svg",
      url: "/dashboard/settings/terms-and-conditions",
    },
    {
        name : "Feedback",
        img : "/images/icon/chat-icon.svg",
        url : "/dashboard/settings/feedback"
    }
  ];

const Settings = () => {

  // logout handler 
  const handleLogout = () => {
    // logout logic
    console.log("Logout");
  };

  return (
    <div className="flex h-screen w-full flex-col bg-[#FFFFFF]">
      <div className="relative h-[80px] bg-gradient-to-r from-[#3156D8] to-[#F28C46]">
      </div>
      <div className="h-fit mx-3 bg-white px-6 pb-8 mt-27">
        {
            options.map((option,index) => (
                <Link
                    key={index}
                    className={`flex w-full items-center border-b-2 border-[#d9d9d9] pb-2 mt-3`}
                    href={option.url}
                  >
                    <div className="h-10 w-10 flex bg-primary rounded-full items-center justify-center">
                      <img
                        src={option.img}
                        className="h-6 w-6"
                      />
                    </div>
                    <span className=" mx-2 text-xl text-black font-[500]">
                      {option.name}
                    </span>
                    <div className="ml-auto flex h-6 w-6 items-center justify-center">
                      <img src="/images/icon/chevron-right.svg" />
                    </div>
                  </Link>
            ))
        }
      {/* logout button */}
      <div className="mt-21 w-full flex">
        <button 
        onClick={handleLogout}
        className="w-full h-12 text-[#56585A] font-[500] text-lg border border-[#56585A] rounded-md">
          Logout
        </button>
      </div>
      </div>

    </div>
  );
};

export default Settings;
