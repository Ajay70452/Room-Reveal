"use client";

import { useEffect, useState } from "react";
import PrimaryButton2 from "../Button/PrimaryButton2";
import BottomNav from "../Navbar/BottomNav";

//please change type of ImageInterface to match the actual data type
type ImageInterface = {
  name: string;
  url: string;
};

const initialImages = [
  {
    name: "image1",
    url: "/images/auth/login-background2.jpg",
  },
  {
    name: "image2",
    url: "/images/auth/login-background2.jpg",
  },
  {
    name: "image3",
    url: "/images/auth/login-background2.jpg",
  },
  {
    name: "image4",
    url: "/images/auth/login-background2.jpg",
  },
];

const defaultImage = {
  name: "default-image",
  url: "/images/auth/login-background2.jpg",
};

const Dashboard = () => {
  const [images, setImages] = useState<ImageInterface[]>([]);

  useEffect(() => {
    //fetch images from server
    //setImages(response.data);
    const imagesLen = initialImages.length;
    if (imagesLen < 6) {
      for (let i = imagesLen - 2; i < 6; i++) {
        initialImages.push(defaultImage);
      }
      setImages(initialImages);
    } else if (imagesLen > 6) {
      setImages(initialImages.slice(0, 6));
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
  };

  return (
    <div className="flex h-full w-full flex-col bg-[#ECECEC]">
      <div className="flex flex-col gap-6">
        <div className="mx-6 mt-20 text-black">
          <h3 className="flex flex-col text-lg font-semibold leading-5 text-center">
            Welcome {"username"},
            <span className="text-lg">Unleash your <span className="text-[#F28C46]">imagination</span> today!</span>
          </h3>
        </div>

        {/* div for gif */}
        <div className=" h-67 flex justify-center items-center">
          <img
            src="/images/auth/auth-gif.gif"
            alt="room"
            className="h-67 w-67"
          />
        </div>
        <div className="mx-8 h-[62px] mb-3">
          <PrimaryButton2 className={"py-5 text-xl"} clickHandler={handleClick}>
            Upload Wall Image
          </PrimaryButton2>
        </div>
        <div className="flex flex-grow justify-center pb-20">
          {images.length > 0 ? (
            <div className="mx-8 grid grid-cols-2 gap-x-4 gap-y-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.name}
                  className={` h-[155px] w-[155px] justify-self-center object-cover`}
                />
              ))}
            </div>
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
      {/* <BottomNav /> */}
    </div>
  );
};

export default Dashboard;

//old design

// "use client";

// import Image from "next/image";
// import BackBtn from "../Button/BackBtn";
// import { useRouter } from "next/navigation";
// import { ImageDataProvider, useImageData } from "@/app/context/ImageDataContext";

// const Dashboard = () => {
//   const router = useRouter();
//   const { imageData, setImageData } = useImageData();

//   const handleWallImgInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const selectedFile = e.target.files?.[0];

//     if (selectedFile) {
//       setImageData(selectedFile);
//       console.log("hello", selectedFile);
//       router.push("/image-editor");
//       return;
//     } else {
//       console.log("Please select a file!");
//     }
//   }

//   return (
//     <div className="flex h-screen w-full flex-col">
//       <div className="absolute mx-2 mt-3">
//         <BackBtn />
//       </div>
//       <div className="mt-14 flex w-full flex-col items-center gap-6">
//         <button
//           type="button"
//           className="w-[350px] max-w-[320px] rounded-xl bg-primary"
//         >
//           <label
//             className="flex items-center gap-2 text-[26px] font-semibold text-white cursor-pointer p-2"
//             htmlFor="room-upload"
//           >
//             <Image
//               alt="uploadwall"
//               src="/images/dashboard/upload-image.png"
//               width={50}
//               height={50}
//               priority
//             />
//             Upload your room
//           </label>
//           <input
//             name="room-upload"
//             id="room-upload"
//             type="file"
//             accept="image/*,capture=camera"
//             onInput={handleWallImgInput}
//             hidden
//           />
//         </button>

//         {/* design upload button */}
//         <button
//           type="button"
//           className="w-[320px] max-w-[320px] rounded-xl bg-primary"
//         >
//           <label
//             className="flex items-center gap-2 text-[26px] font-semibold text-white cursor-pointer p-2"
//             htmlFor="design-upload"
//           >
//             <Image
//               alt="upload-design"
//               src="/images/dashboard/upload-design.png"
//               width={50}
//               height={50}
//               priority
//             />
//             Upload your design
//           </label>
//           <input
//             name="design-upload"
//             id="design-upload"
//             type="file"
//             accept="image/*,capture=camera"
//             hidden
//           />
//         </button>

//         {/* images view */}
//         <div className="w-fit">
//           <div className="w-350 w-350 grid grid-cols-3 gap-4">
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//             <Image
//               src="/images/auth/login-background2.jpg"
//               alt="Image 1"
//               width={50}
//               height={50}
//               className="h-24 w-24 object-cover"
//             />
//           </div>
//           <div className="float-right mb-5 mt-2">
//             <button type="button" className="flex items-center gap-2 text-xl">
//               <span>View all</span>
//               <Image
//                 src="/images/icon/icon-arrow-light.svg"
//                 alt="view all images"
//                 width={20}
//                 height={20}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex-grow">
//         {/* Manage account section */}
//         <div className="flex h-full justify-center bg-[#E9E9E9]">
//           <button
//             className="mx-5 flex w-[350px] h-fit my-10 items-center gap-2 rounded-xl border-2 border-primary text-[26px] text-primary font-semibold p-2"
//             type="button"
//           >
//             <Image
//             src="/images/icon/manage-account.png"
//             alt="manage account"
//             className="w-13 h-12"
//             width={40}
//             height={40}
//             quality={100}
//             priority
//             />
//             <span>Manage Account</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
