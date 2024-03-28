"use client";

import Image from "next/image";
import BackBtn from "../Button/BackBtn";
import { useState } from "react";
import Link from "next/link";

const Signin = () => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const toggleVisibility = () => {
    setPassVisibility((passVisible) => !passVisible);
  };

  // handle login logic here
  const handleLogin = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login with email");
    console.log(credentials);
  };

  return (
    <div className="mx-6 my-6 h-screen">
      <div className="relative h-10 w-10">
        <BackBtn />
      </div>
      <h1 className="mt-10 text-[28px] font-semibold leading-10 text-black">
        Login with email
      </h1>

      <form onSubmit={handleLogin} className="mt-10 flex w-full flex-col gap-5">
        <div className="gap flex h-12 items-center border-b-[1px] border-black p-3">
          <Image
            src={"/images/icon/mail.svg"}
            alt="mail-icon"
            width={24}
            height={24}
            className="text-primary"
          />
          <input
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="ml-3 h-full w-full bg-transparent text-base leading-[4.86px] text-black placeholder-black outline-none focus:placeholder-[#AAAAAA]"
          />
        </div>
        <div className="flex h-12 items-center border-b-[1px] border-black p-3">
          <Image
            src={"/images/icon/lock.svg"}
            alt="lock-icon"
            width={24}
            height={24}
          />
          <input
            type={passVisibility ? "text" : "password"}
            placeholder="Password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="ml-3 h-full w-full bg-transparent text-base leading-[4.86px] text-black placeholder-black outline-none focus:placeholder-[#AAAAAA]"
          />
          <button
            type="button"
            className="focus:outline-none"
            onClick={toggleVisibility}
          >
            {passVisibility ? (
              <Image
                src={"/images/icon/eye.svg"}
                alt="eye-icon"
                width={26}
                height={26}
              />
            ) : (
              <Image
                src={"/images/icon/close-eye.svg"}
                alt="close-eye-icon"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
        <Link
          href={"/auth/forgot-password"}
          className="text-[14px] leading-3 text-primary text-center underline"
        >
          Forgot Password?
        </Link>

        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-[20px] bg-primary py-3 text-center text-base font-semibold text-white"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
