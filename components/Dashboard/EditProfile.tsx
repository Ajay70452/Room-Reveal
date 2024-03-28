"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import BackBtn from "../Button/BackBtn";

// random data of user for an instance
const initialData = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "1234567890",
    password: "********",
    occupation: "Retailer"
};


const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [updatedData, setUpdatedData] = useState(initialData);

  useEffect(() => {
    // fetch user data from backend
    // setUpdatedData(fetchedData);
  }, []);
  

    // toggle password visibility

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

// handle input change
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
};

// cancel button handler
const handleCancelClick = () => {
    // cancel logic
    setUpdatedData(initialData);
};

// save button handler
const saveData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // save logic
    console.log(updatedData);

    // give backend api call to save data
    console.log("Save");
};

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative ml-6 mt-6 h-10 w-10">
        <BackBtn />
      </div>
      <div className="self-center text-2xl leading-7 text-black">
        Edit Profile
      </div>
      <div className=" my-10 h-29 w-29 self-center">
        <Image
          src={"/images/icon/profile.svg"}
          alt="profile-pic"
          layout="responsive"
          width={29}
          height={29}
          objectFit="contain"
          className="h-29 w-29 rounded-full bg-[#eeeeee]"
        />
      </div>
      <form className="flex h-full w-full flex-col gap-5 px-8" onSubmit={saveData}>
        <div className="">
          <label htmlFor="name" className="text-lg font-[500] text-[#B3B3B3]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="h-10 w-full border-b-2 border-[#d9d9d9] px-1 text-lg text-black outline-none"
            placeholder="Full name"
            value={updatedData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-lg font-[500] text-[#B3B3B3]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="h-10 w-full border-b-2 border-[#d9d9d9] px-1 text-lg text-black outline-none"
            value={updatedData.email}
            placeholder="example@gmail.com"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col">
          {/* password */}
          <label
            htmlFor="password"
            className="text-lg font-[500] text-[#B3B3B3]"
          >
            Password
          </label>
          <div className="relative flex w-full">
            {showPassword ? (
              <input
                type="text"
                id="password"
                name="password"
                className="h-10 w-full border-b-2 border-[#d9d9d9] px-1 text-lg text-black outline-none"
                placeholder="********"
                value={updatedData.password}
                onChange={handleInputChange}
              />
            ) : (
              <input
                type="password"
                id="password"
                name="password"
                className="h-10 w-full border-b-2 border-[#d9d9d9] px-1 text-lg text-black outline-none"
                placeholder="********"
                value={updatedData.password}
                onChange={handleInputChange}
              />
            )}
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <Image
                  src={"/images/icon/eye.svg"}
                  alt="eye"
                  layout="fixed"
                  width={20}
                  height={20}
                  objectFit="contain"
                  className="h-6 w-6"
                />
              ) : (
                <Image
                  src={"/images/icon/close-eye.svg"}
                  alt="close-eye"
                  layout="fixed"
                  width={20}
                  height={20}
                  objectFit="contain"
                  className="h-6 w-6"
                />
              )}
            </button>
          </div>
        </div>
        <div>
          {/* phone input */}
          <label htmlFor="phone" className="text-lg font-[500] text-[#B3B3B3]">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="h-10 w-full border-b-2 border-[#d9d9d9] px-1 text-lg text-black outline-none"
            value={updatedData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            maxLength={10}
          />
        </div>
        {/* retailer */}
        <div>
          <label htmlFor="occupation" className="text-lg font-[500] text-[#B3B3B3]">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            className="h-10 w-full border-b-2 border-[#d9d9d9] px-1 text-lg text-black outline-none"
            value={updatedData.occupation}
            onChange={handleInputChange}
            placeholder="Occupation"
          />
        </div>

        {/* buttons */}
        <div className="w-full mt-10 flex justify-between text-lg gap-14">
                <button type="button" className="w-full text-center border-2 border-[#56585A] rounded-md text-black py-1"
                onClick={handleCancelClick}
                >
                    Cancel
                </button>
                <button type="submit" className="w-full text-center text-white bg-primary py-1 rounded-md"
                >
                    Save Changes
                </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
