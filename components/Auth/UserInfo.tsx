"use client";
import Image from "next/image";
import BackBtn from "../Button/BackBtn";
import { useMemo, useState } from "react";

const UserInfo = () => {
  const [info, setInfo] = useState({
    name: "" as String,
    dob: null as Date | null,
    phone: null as Number | null,
    occupation: "" as String,
    profileImg: null as File | null,
  });
  const [date, setDate] = useState(new Date());
  

  const getInfo = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Get user info");
  };

  return (
      <div className="mx-6 my-6 h-screen" >
        <div className="relative h-10 w-10">
          <BackBtn />
        </div>
        <h1 className="mt-10 text-[28px] font-semibold leading-10 text-black">
          Additional Information
        </h1>
        <form onSubmit={getInfo} className="mt-2 flex w-full flex-col gap-5">
          <div className="flex h-12 flex-col p-3">
            <div className="flex">
              <Image
                src={"/images/icon/profile.svg"}
                alt="mail-icon"
                width={24}
                height={24}
              />
              <span className="pl-3 text-lg text-black">Profile Picture</span>
            </div>
            <label
              htmlFor="profile"
              className="ml-8 mt-2 flex cursor-pointer items-center gap-2"
            >
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black object-contain">
                {info.profileImg ? (
                  <img
                    src={URL.createObjectURL(info.profileImg)}
                    alt="profile"
                    className="h-[50px] w-[50px] rounded-full object-fill"
                  />
                ) : (
                  <Image
                    src={"/images/icon/camera.svg"}
                    alt="upload-icon"
                    width={35}
                    height={35}
                  />
                )}
              </div>
            </label>
            <input
              type="file"
              name="profileImg"
              id="profile"
              accept="image/*"
              className="hidden"
              onInput={(e) => {
                const inputElement = e.target as HTMLInputElement;
                if (inputElement.files) {
                  setInfo({ ...info, profileImg: inputElement.files[0] });
                  console.log(info);
                }
              }}
            />
          </div>
          <div className="mt-10 flex h-12 items-center border-b-[1px] border-black p-3 focus-within:border focus-within:border-blue-700">
            <Image
              src={"/images/icon/profile.svg"}
              alt="mail-icon"
              width={24}
              height={24}
            />
            <input
              type="text"
              name="name"
              placeholder="Full name"
              onChange={(e) =>
                setInfo({ ...info, name: e.target.value as String })
              }
              className="ml-3 h-full w-full bg-transparent text-[18px] leading-[4.86px] text-black placeholder-black outline-none"
            />
          </div>
          <div className="flex h-12 items-center border-b-[1px] border-black p-3 focus-within:border focus-within:border-blue-700">
            <Image
              src={"/images/icon/profile.svg"}
              alt="mail-icon"
              width={24}
              height={24}
            />
            <input
              type="number"
              maxLength={10}
              name="phone"
              placeholder="Phone number"
              onChange={(e) => {
                setInfo({ ...info, phone: parseInt(e.target.value) });
              }}
              className="ml-3 h-full w-full bg-transparent text-[18px] leading-[4.86px] text-black placeholder-black outline-none"
            />
          </div>
          <div className="flex h-12 flex-col p-3">
            <div className="flex">
              <Image
                src={"/images/icon/profile.svg"}
                alt="mail-icon"
                width={24}
                height={24}
              />
              <span className="pl-3 text-lg text-black">Date of birth</span>
            </div>
            <div className="relative max-w-sm mt-3">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>

              </div>
              <input
                type="date"
                name="dob"
                max={new Date().toISOString().split("T")[0]}
                onInput={(e) => {
                  const inputElement = e.target as HTMLInputElement;
                  //if need to store as string
                  console.log(inputElement.valueAsDate?.toISOString().split("T")[0]);
                  
                  //if need to convert to date
                  inputElement.valueAsDate ? setInfo({ ...info, dob: inputElement.valueAsDate }) : null;
                  console.log(info);
                }}
                className="block rounded-lg border border-gray-300 p-2.5 ps-10 text-sm text-gray-900 focus:border-[#3156D8] focus:ring-[#3156D8] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Select date"
                />
            </div>
          </div>
          <div className="mt-10 flex h-12 items-center border-b-[1px] border-black p-3 focus-within:border focus-within:border-blue-700">
            <Image
              src={"/images/icon/profile.svg"}
              alt="mail-icon"
              width={24}
              height={24}
            />
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              onChange={(e) =>
                setInfo({ ...info, occupation: e.target.value as String })
              }
              className="ml-3 h-full w-full bg-transparent text-[18px] leading-[4.86px] text-black placeholder-black outline-none"
            />
          </div>
        </form>
      </div>
  );
};

export default UserInfo;
