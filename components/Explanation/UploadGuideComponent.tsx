import React from "react";
import Image from "next/image";

const UploadGuideComponent = () => {
  return (
    <div className="bg-[#FFEAC2] p-5 text-center">
      <h2 className="mb-10 text-5xl font-bold text-[#80471c]">How it works?</h2>

      <div className="flex flex-col items-start justify-center space-x-4 sm:flex-row">
        <div className="m-4 flex flex-col items-center space-y-2 ">
          <div className="relative m-5 h-64 w-64">
            <Image
              src="/images/how-to/wlp-design3.png"
              alt="Upload your designs"
              layout="fill" // This makes the image responsive within the container
              className="rounded-lg"
              objectFit="cover" // This will cover the area without stretching
            />
          </div>
          <div className="w-64 text-center">
            {" "}
            {/* Set the width of the text to match the image */}
            <h3 className="font-poppins mb-1 text-xl font-medium text-black">
              1. Upload Your Designs
            </h3>
            <p className="text-s text-black">
              Upload your wallpaper or wall tiles designs
            </p>
          </div>
        </div>

        <div className="m-4 flex flex-col items-center space-y-2">
          <div className="relative m-5 h-64 w-64">
            {" "}
            {/* Ensuring the container is square */}
            <Image
              src="/images/how-to/plain-wall.png"
              alt="Upload your designs"
              layout="fill" // This makes the image responsive within the container
              className="rounded-lg"
              objectFit="cover" // This will cover the area without stretching
            />
          </div>
          <div className="w-64 text-center">
            {" "}
            {/* Set the width of the text to match the image */}
            <h3 className="font-poppins mb-2 text-xl font-medium text-[#2c2c2c]">
              2. Choose your room
            </h3>
            <p className="text-s text-black">
              Click the image of the room that you want to Visualize
            </p>
          </div>
        </div>

        <div className="m-4 flex flex-col items-center space-y-2">
          <div className="relative m-5 h-64 w-64">
            {" "}
            {/* Ensuring the container is square */}
            <Image
              src="/images/how-to/wlp-options2.png"
              alt="Upload your designs"
              layout="fill" // This makes the image responsive within the container
              className="rounded-lg"
              objectFit="cover" // This will cover the area without stretching
            />
          </div>
          <div className="w-64 text-center">
            {" "}
            {/* Set the width of the text to match the image */}
            <h3 className="font-poppins mb-2 text-xl font-medium text-[#2c2c2c]">
              3. Select the design.
            </h3>
            <p className="text-s text-black">
              Choose the design of the wallpaper of wall tile.
            </p>
          </div>
        </div>

        <div className="m-4 flex flex-col items-center space-y-2">
          <div className="relative m-5 h-64 w-64">
            {" "}
            {/* Ensuring the container is square */}
            <Image
              src="/images/how-to/wlp-wall.png"
              alt="Upload your designs"
              layout="fill" // This makes the image responsive within the container
              className="rounded-lg"
              objectFit="cover" // This will cover the area without stretching
            />
          </div>
          <div className="w-64 text-center">
            {" "}
            {/* Set the width of the text to match the image */}
            <h3 className="font-poppins mb-2 text-xl font-medium text-[#2c2c2c]">
              4. See the result.
            </h3>
            <p className="text-s text-black">
              See your design visualized on your wall
            </p>
          </div>
        </div>
      </div>

      <button className="mb-15 mt-6 rounded-full bg-[#80471c] px-6 py-2 font-medium text-white">
        Get Started
      </button>
    </div>
  );
};

export default UploadGuideComponent;
