"use client";

import Image from "next/image";
import Link from "next/link";

const Auth = () => {
  // Google Login handler
  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Google Login");
  };

  // Facebook Login handler
  const handleFacebookLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Facebook Login");
  };

  return (
    <div className="flex h-screen w-full flex-col bg-[#f2f2f2]">
      <div className="my-14 w-[250px] self-center">
        <Image
          src="/images/logo/logo-plain.png"
          alt="logo"
          width={100}
          height={100}
          quality={100}
          className="hidden h-auto w-full max-w-full  dark:block"
          priority
        />
        <Image
          src="/images/logo/logo-plain.png"
          alt="logo"
          width={100}
          height={100}
          quality={100}
          className="h-auto w-full max-w-full dark:hidden"
          priority
        />
      </div>
      <div className="mt-12 w-[304px] flex flex-col self-center">
        <h1 className="text-center text-4xl font-[500] text-black mb-4">
          Welcome!
        </h1>
        <p className="text-center text-lg text-black leading-7">
        Please log in to access your account and explore our platform.
        </p>
      </div>
      <div className="flex w-full flex-col mt-15">
        <div className="flex h-55 w-[327px] flex-col items-center justify-between self-center">
          <div className="flex h-[90px] w-full flex-col justify-between">
            <Link
              href={"/auth/signin"}
              className="w-full rounded-[20px] bg-primary py-3 text-center text-lg font-[500] text-white"
            >
              Login with email
            </Link>
            <span className="text-center text-xs leading-4 text-black">OR</span>
          </div>
          <div className="flex w-full flex-col gap-2">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-[20px] border-2 border-black bg-white py-3 text-base font-semibold text-black"
              onClick={handleGoogleLogin}
            >
              <Image
                src="/images/brand/google-icon.svg"
                width={24}
                height={24}
                alt={"Google"}
              />
              Continue with Google
            </button>
            <button
              className="flex w-full items-center justify-center gap-2 rounded-[20px] border-2 border-black bg-white py-3 text-base font-semibold text-black"
              onClick={handleFacebookLogin}
            >
              <Image
                src="/images/brand/facebook-icon.svg"
                width={24}
                height={24}
                alt={"facebook"}
              />
              Continue with Facebook
            </button>
          </div>
        </div>
        <div className="flex h-24 w-full items-center justify-center text-center text-black">
          Don't have an Account?&nbsp;
          <Link href={"/auth/signup"} className="text-primary">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
