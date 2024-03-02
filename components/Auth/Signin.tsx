"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SecondaryButton from "../Button/SecondaryButton";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();

  // login button for redirecting into login page
  const loginBtnHandler = (arg: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/auth/signin/credentials");
  };

  //google login handler
  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  //facebook login handler
  const handleFacebookLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <>
      {/* <!-- ===== SignIn Form Start ===== --> */}
      <div className="relative flex h-full min-h-screen w-full flex-1 flex-col overflow-y-hidden border-black">
        {/* div for Logo holding */}
        <div className="flex justify-center bg-[url('/images/auth/login-background.png')] bg-opacity-60 bg-[length:100%_550px] h-[33rem] bg-no-repeat -mt-14">
          <div className="z-10 my-32 w-[300px]">
            <Image
              src="/images/logo/logo-plain.png"
              alt="logo"
              width={100}
              height={50}
              quality={100}
              className="hidden h-auto w-full max-w-full  dark:block"
              priority
            />
            <Image
              src="/images/logo/logo-plain.png"
              alt="logo"
              width={100}
              height={50}
              quality={100}
              className="h-auto w-full max-w-full dark:hidden"
              priority
            />
          </div>
        </div>

        <div className="relative bottom-0 flex w-full flex-grow">
          <div className="w-full rounded-se-3xl rounded-ss-3xl bg-primary py-8 -mt-6">
            <div className="flex w-full justify-center">
              <SecondaryButton
                clickHandler={loginBtnHandler}
                children={"Login with email"}
              />
            </div>
            <div className="relative my-10 flex h-5 w-full justify-center text-white">
              <div className="h-0 w-full border border-white"></div>
              <span className="absolute bottom-[5px] bg-primary px-5 font-bold">
                or
              </span>
            </div>
            <div className="-my-5 flex justify-center">
              <div className="flex w-1/2 justify-between">
                <button
                  type="button"
                  className="w-12"
                  onClick={handleGoogleLogin}
                >
                  <Image
                    src="/images/brand/google-white.png"
                    alt="Google icon"
                    width={20}
                    height={50}
                    quality={100}
                    sizes="100vw"
                    className="h-auto w-full max-w-full"
                  />
                </button>
                <button
                  type="button"
                  className="w-12"
                  onClick={handleFacebookLogin}
                >
                  <Image
                    src="/images/brand/facebook-white.png"
                    alt="Facebook icon"
                    width={20}
                    height={50}
                    quality={100}
                    sizes="100vw"
                    className="h-auto w-full max-w-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== SignIn Form End ===== --> */}
    </>
  );
};

export default Signin;
