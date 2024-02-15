"use client";
import { useImageData } from "@/app/context/ImageDataContext";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense, SyntheticEvent, useEffect, useState } from "react";
import ReactCrop, {
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
  centerCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface ImageData {
  file: File | string;
}

const ImageEditor = () => {
  const { imageData } = useImageData();
  const [imageUrl, setImageUrl] = useState("");
  const [crop, setCrop] = useState<Crop>();
  const [editedImage, setEditedImage] = useState<string>("");
  const [initialCrop,setInitialCrop] = useState<{x : number,y:number,height:number,width:number}>({
    x:0,
    y:0,
    height:0,
    width:0
  });
  const [naturalHeightImg,setNaturalHeightImg] = useState<number>(0);

  const router = useRouter();

  if (imageData?.file === undefined) {
    router.push("/dashboard");
  }

  useEffect(() => {
    const reader = new FileReader();

    if (typeof imageData?.file === "object") {
      reader.readAsDataURL(imageData?.file);
    } else {
      router.push("/dashboard");
    }

    reader.addEventListener("load", (e) => {
      const imageUrl = reader.result?.toString() || "";
      setImageUrl(imageUrl);
    });
  }, [imageData]);

  const onImageLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const { naturalHeight, naturalWidth, width, height } = e.currentTarget;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: 100,
      },
      1,
      naturalHeight,
      naturalWidth,
    );

    const centeredCrop = centerCrop(crop, width, height);
      console.log(naturalWidth , " " ,naturalHeight ," ", width , " " ,height)
      const xMinus = width < naturalWidth ? 0 : width - naturalWidth;
      const yMinus = height < naturalHeight ? 0 : height - naturalHeight;
    setInitialCrop(croppixel => ({...croppixel , x:xMinus , y:yMinus}));

    setCrop(centeredCrop);
  };

  const getEditedImage = () => {
    const image = new Image();
    image.src = imageUrl;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const croppixel = convertToPixelCrop(crop || {}, image.naturalWidth, image.naturalHeight);
    console.log(image.naturalWidth, " ", image.naturalHeight, " ", croppixel?.x, " ", croppixel?.y, " ", croppixel?.width, " ", croppixel?.height);


    if (ctx) {
      const pixelRatio = window.devicePixelRatio;
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      canvas.width = Math.floor((croppixel?.width || 0) * scaleX * pixelRatio);
      canvas.height = Math.floor((croppixel?.height || 0) * scaleY * pixelRatio);

      ctx.scale(pixelRatio, pixelRatio);
      ctx.imageSmoothingQuality = "high";
      ctx.save();
      
      const  cropX = croppixel?.x * scaleX;
      const  cropY = croppixel?.y * scaleY;
      ctx.translate((croppixel?.x - initialCrop.x), (croppixel?.y - initialCrop.y));
      console.log(initialCrop , " " , croppixel , " " , cropX , " " ,cropY)
      ctx.drawImage(
        image,
        (croppixel?.x - initialCrop.x)|| 0,
        (croppixel?.y - initialCrop.y)|| 0,
        image.naturalWidth,
        image.naturalHeight,
        0,
        0,
        croppixel?.width || 0,
        croppixel?.height || 0,
      );

      const editedImage = canvas.toDataURL("image/png");
      setEditedImage(editedImage);
      // router.push({
      //   pathname: "/dashboard",
      //   query: { editedImage },
      // });
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="absolute right-2 top-0 text-xl font-semibold text-primary">
        <button type="button" onClick={getEditedImage}>
          Done
        </button>
      </div>
      <div className="mt-8 h-[550px] max-h-[550px] bg-[#D9D9D9]">
        <Suspense fallback={<div>Loading...</div>}>
          {imageUrl && (
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              {imageUrl && (
                <ReactCrop
                  keepSelection
                  crop={crop}
                  onChange={(pixelCrop, parcentCrop) => setCrop(parcentCrop)}
                >
                  <NextImage
                    src={imageUrl}
                    alt="image-edit"
                    className="h-[550px] max-h-[550px] object-scale-down"
                    width={550}
                    height={550}
                    objectFit="scale-down"
                    onLoad={onImageLoad}
                  />
                </ReactCrop>
              )}
            </div>
          )}
        </Suspense>
      </div>

      {/* this div contains buttons for formatting image */}
      <div className="flex justify-center gap-[30px] py-5">
        <button className="flex h-15 w-15 items-center justify-center rounded-full border border-black">
          <NextImage
            src="/images/icon/back-btn.png"
            alt="crop-image"
            width={40}
            height={40}
          />
        </button>
        <button
          className="flex h-15 w-15 items-center justify-center rounded-full border border-black"
          // rotation handler
        >
          <NextImage
            src={"/images/icon/back-btn.png"}
            alt="rotate-image"
            width={40}
            height={40}
          />
        </button>
      </div>
      <div className="w-[100%] h-[100%]">
        <NextImage 
        src={editedImage} 
        alt="edited-image" 
        objectFit="contain"
        width={550}
        height={550}
        />
      </div>
    </div>
  );
};

export default ImageEditor;
