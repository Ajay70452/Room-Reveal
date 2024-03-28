"use client";
import Image from "next/image"
import SubmitFormBtn from "../Button/SubmitFormBtn"
import BackBtn from "../Button/BackBtn"
import { useFormState } from "react-dom";
import { onEmailGet } from "@/app/_actions/forget_pass_actions";

const ForgetPassword = () => {
    const [state, formAction] = useFormState(onEmailGet, {
        success: false,
        error: null,
        msg : null,
        status : null
    });

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative ml-6 mt-6 h-10 w-10">
        <BackBtn />
      </div>

      {/* hard coded text */}
      <div className="flex w-full flex-col gap-8  text-center">
        <h3 className=" mx-auto mt-10 w-fit text-[28px] font-semibold leading-10 text-black">
          Forgot Password
        </h3>
        <p className="mx-auto w-fit text-xl text-black">
          Enter <span className=" text-[#F28C46]">Email!</span>{" "}
          <span className="block">to reset password</span>
        </p>
      </div>

    <form className="mt-15 flex w-full flex-col gap-20 px-6" action={formAction}>
        <div className="flex h-12 items-center border-b-[1px] border-black p-3">
          <Image
            src={"/images/icon/mail.svg"}
            alt="mail-icon"
            width={24}
            height={24}
            className="text-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="ml-3 h-full w-full bg-transparent text-base leading-[4.86px] text-black placeholder-black outline-none focus:placeholder-[#AAAAAA]"
            required
          />
        </div>
        <SubmitFormBtn>
          Send Email
        </SubmitFormBtn>
      </form>
    </div>
  )
}

export default ForgetPassword