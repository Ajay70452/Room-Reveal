"use client";
import { useImageData } from "@/app/context/ImageDataContext";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import React, {
  Suspense,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactCrop, {
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
  centerCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDebounceEffect } from "./useDebounceEffect";
import { canvasPreview } from "./canvasPreview";

interface ImageData {
  file: File | string;
}

const ImageEditor = () => {
  const { imageData } = useImageData();
  const [imageUrl, setImageUrl] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const router = useRouter();

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

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    console.log(width, height);
    interface InitialCrop extends Crop {
      aspect: number;
    }

    const initialCrop: InitialCrop = {
      unit: "%",
      aspect: width / height,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };
  
    setCompletedCrop(convertToPixelCrop(initialCrop,width,height));
  }
  

  async function getEditedImage() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    console.log(image, previewCanvas, completedCrop);
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height,
    );
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size

    const blob = await offscreen.convertToBlob({
      type: "image/png",
      quality: 1,
    });

    console.log(URL.createObjectURL(blob));
    console.log(blob);
    // if (blobUrlRef.current) {
    //   URL.revokeObjectURL(blobUrlRef.current)
    // }
    // blobUrlRef.current = URL.createObjectURL(blob)

    // if (hiddenAnchorRef.current) {
    //   hiddenAnchorRef.current.href = blobUrlRef.current
    //   hiddenAnchorRef.current.click()
    // }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          rotate,
        );
      }
    },
    100,
    [completedCrop, rotate],
  );

  return (
    <div className="flex h-full flex-col">
      <div className="absolute right-2 top-0 text-xl font-semibold text-primary">
        <button type="button" onClick={getEditedImage}>
          Done
        </button>
      </div>
      <div className="mt-8 h-[550px] max-h-[550px] overflow-auto bg-[#D9D9D9]">
  <Suspense fallback={<div>Loading...</div>}>
    {imageUrl && (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        {imageUrl && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={undefined}
          >
            <NextImage
              ref={imgRef}
              src={imageUrl}
              style={{ transform: `rotate(${rotate}deg)` }}
              alt="image-edit"
              className="h-[550px] max-h-[550px]"
              width={550}
              height={550}
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
        <button
          className="flex h-15 w-15 items-center justify-center rounded-full border border-black"
          onClick={() => {
            const img = imgRef.current;
            if (img) {
              const { width, height } = img;
              const crop = centerCrop(
                makeAspectCrop(
                  {
                    unit: "%",
                    width: 90,
                  },
                  aspect || 1,
                  width,
                  height,
                ),
                width,
                height,
              );
              setCrop(crop);
            }
          }}
        >
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
          onClick={(e) => setRotate((rotate) => (rotate + 90) % 360)}
        >
          <NextImage
            src={"/images/icon/back-btn.png"}
            alt="rotate-image"
            width={40}
            height={40}
          />
        </button>
      </div>
      {!!completedCrop && (
        <div>
          <canvas
            ref={previewCanvasRef}
            width={completedCrop.width}
            height={completedCrop.height}
            style={{
              border: "1px solid black",
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            hidden
            />
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
