"use client";

import Image from "next/image";
import BackBtn from "../Button/BackBtn";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Singup = () => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [cnfPassVisibility, setCnfPassVisibility] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    cnfPassword: "",
  });
  const router = useRouter();

  // for toggle password visibility
  const togglePassVisibility = () => {
    setPassVisibility((passVisible) => !passVisible);
  };

  // for toggle confirm password visibility
  const toggleCnfPassVisibility = () => {
    setCnfPassVisibility((passVisible) => !passVisible);
  };

  // handle sign up logic here
  const handleSignup = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login with email");
    console.log(credentials);

    // if got credentials then redirect
    router.push("/auth/signup/user-info");
  };

  // handle google login logic here
  const handleGoogleLogin = () => {
    console.log("Login with google");
  };

  // handle facebook login logic here
  const handleFacebookLogin = () => {
    console.log("Login with facebook");
  };

  return (
    <div className="mx-6 my-6 h-screen">
      <div className="relative h-10 w-10">
        <BackBtn />
      </div>
      <h1 className="mt-10 text-[28px] font-semibold leading-10 text-black">
        Sign up with email
      </h1>

      <form
        onSubmit={handleSignup}
        className="mt-10 flex w-full flex-col gap-5"
      >
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
            className="ml-3 h-full w-full bg-transparent text-[18px] leading-[4.86px] text-black placeholder-black outline-none
            focus:placeholder-[#AAAAAA]"
          />
          <button
            className="focus:outline-none"
            type="button"
            onClick={togglePassVisibility}
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

        {/* confirm password div */}
        <div className="flex h-12 items-center border-b-[1px] border-black p-3">
          <Image
            src={"/images/icon/lock.svg"}
            alt="lock-icon"
            width={24}
            height={24}
          />
          <input
            type={cnfPassVisibility ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) =>
              setCredentials({ ...credentials, cnfPassword: e.target.value })
            }
            className="ml-3 h-full w-full bg-transparent text-[18px] leading-[4.86px] text-black placeholder-black outline-none focus:placeholder-[#AAAAAA]"
          />
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleCnfPassVisibility}
          >
            {cnfPassVisibility ? (
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
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-[20px] bg-primary py-3 text-center text-base text-white"
          >
            Sign up
          </button>
        </div>
      </form>
      <div className="mt-5 items-center">
        <div className="text-center text-sm leading-4 text-black">OR</div>
      </div>
      <div className="mt-10 flex justify-between">
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-[48%] justify-center rounded-[12px] border border-black py-3 text-center text-base font-semibold text-white focus:border-primary"
        >
          <Image
            src={"/images/brand/google-icon.svg"}
            alt="google-icon"
            width={24}
            height={24}
          />
        </button>
        <button
          type="button"
          onClick={handleFacebookLogin}
          className="flex w-[48%] justify-center rounded-[12px] border border-black py-3 text-center text-base font-semibold text-white focus:border-primary"
        >
          <Image
            src={"/images/brand/facebook-icon.svg"}
            alt="facebook-icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default Singup;
