"use client";

import Image from "next/image";
import BackBtn from "../Button/BackBtn";
import { useRouter } from "next/navigation";
import { ImageDataProvider, useImageData } from "@/app/context/ImageDataContext";

const Dashboard = () => {
  const router = useRouter();
  const {imageData, setImageData } = useImageData();

  const handleWallImgInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setImageData({ file: selectedFile });
    }else{
      console.log("Please select file!");
    }
  }

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="absolute mx-2 mt-3">
        <BackBtn />
      </div>
      <div className="mt-14 flex w-full flex-col items-center gap-6">
        <button
          type="button"
          className="w-[350px] max-w-[320px] rounded-xl bg-primary"
        >
          <label
            className="flex items-center gap-2 text-[26px] font-semibold text-white cursor-pointer p-2"
            htmlFor="room-upload"
          >
            <Image
              alt="uploadwall"
              src="/images/dashboard/upload-image.png"
              width={50}
              height={50}
              priority
            />
            Upload your room
          </label>
          <input
            name="room-upload"
            id="room-upload"
            type="file"
            accept="image/*,capture=camera"
            onInput={handleWallImgInput}
            hidden
          />
        </button>

        {/* design upload button */}
        <button
          type="button"
          className="w-[320px] max-w-[320px] rounded-xl bg-primary"
        >
          <label
            className="flex items-center gap-2 text-[26px] font-semibold text-white cursor-pointer p-2"
            htmlFor="design-upload"
          >
            <Image
              alt="upload-design"
              src="/images/dashboard/upload-design.png"
              width={50}
              height={50}
              priority
            />
            Upload your design
          </label>
          <input
            name="design-upload"
            id="design-upload"
            type="file"
            accept="image/*,capture=camera"
            hidden
          />
        </button>

        {/* images view */}
        <div className="w-fit">
          <div className="w-350 w-350 grid grid-cols-3 gap-4">
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
            <Image
              src="/images/auth/login-background2.jpg"
              alt="Image 1"
              width={50}
              height={50}
              className="h-24 w-24 object-cover"
            />
          </div>
          <div className="float-right mb-5 mt-2">
            <button type="button" className="flex items-center gap-2 text-xl">
              <span>View all</span>
              <Image
                src="/images/icon/icon-arrow-light.svg"
                alt="view all images"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        {/* Manage account section */}
        <div className="flex h-full justify-center bg-[#E9E9E9]">
          <button
            className="mx-5 flex w-[350px] h-fit my-10 items-center gap-2 rounded-xl border-2 border-primary text-[26px] text-primary font-semibold p-2"
            type="button"
          >
            <Image 
            src="/images/icon/manage-account.png" 
            alt="manage account" 
            className="w-13 h-12"
            width={40} 
            height={40} 
            quality={100}
            priority
            />
            <span>Manage Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
