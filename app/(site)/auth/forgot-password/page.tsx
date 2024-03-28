import ForgetPassword from "@/components/Auth/ForgetPassword";
import BackBtn from "@/components/Button/BackBtn";
import SubmitFormBtn from "@/components/Button/SubmitFormBtn";
import Image from "next/image";
import { FormEvent } from "react";

const page = () => {
    const handleFormSubmit = async(e: FormEvent<HTMLFormElement>) => {
        'use server'
        e.preventDefault();
        console.log("Form Submitted");
    };

  return (
    <ForgetPassword />
  );
};

export default page;
