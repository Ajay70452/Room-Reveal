import React from "react";
import Image from "next/image";
      
      const UploadGuideComponent = () => {
          return (
              <div className="bg-[#FFEAC2] text-center p-5">
                  <h2 className="text-5xl text-[#80471c] font-bold mb-10">How it works?</h2>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-start space-x-4">
                      <div className="flex flex-col items-center m-4 mb-10 space-y-2 ">
                          <div className="w-64 h-64 m-1 relative"> 
                              <Image
                                  src="/images/how-to/wlp-design3.png"
                                  alt="Upload your designs"
                                  layout="fill" // This makes the image responsive within the container
                                  className="rounded-lg"
                                  objectFit="cover" // This will cover the area without stretching
                              />
                          </div>
                          <div className="text-center w-64"> {/* Set the width of the text to match the image */}
                          <h3 className="text-xl text-black mb-1 font-poppins font-medium">1. Upload Your Designs</h3>
                          <p className="text-black text-s">Upload your wallpaper or wall tiles designs</p>
                      </div>
                  </div>

                  <div className="flex flex-col items-center m-4 space-y-2">
                      <div className="w-64 h-64 m-5 relative"> {/* Ensuring the container is square */}
                          <Image
                              src="/images/how-to/plain-wall.png"
                              alt="Upload your designs"
                              layout="fill" // This makes the image responsive within the container
                              className="rounded-lg"
                              objectFit="cover" // This will cover the area without stretching
                          />
                      </div>
                      <div className="text-center w-64"> {/* Set the width of the text to match the image */}
                          <h3 className="text-xl text-[#2c2c2c] mb-2 font-poppins font-medium">2. Choose your room</h3>
                          <p className="text-black text-s">Click the image of the room that you want to Visualize</p>
                      </div>
                  </div>

                  <div className="flex flex-col items-center m-4 space-y-2">
                      <div className="w-64 h-64 m-5 relative"> {/* Ensuring the container is square */}
                          <Image
                              src="/images/how-to/wlp-options2.png"
                              alt="Upload your designs"
                              layout="fill" // This makes the image responsive within the container
                              className="rounded-lg"
                              objectFit="cover" // This will cover the area without stretching
                          />
                      </div>
                      <div className="text-center w-64"> {/* Set the width of the text to match the image */}
                          <h3 className="text-xl text-[#2c2c2c] mb-2 font-poppins font-medium">3. Select the design.</h3>
                          <p className="text-black text-s">Choose the design of the wallpaper of wall tile.</p>
                      </div>
                  </div>

                  <div className="flex flex-col items-center m-4 space-y-2">
                      <div className="w-64 h-64 m-5 relative"> {/* Ensuring the container is square */}
                          <Image
                              src="/images/how-to/wlp-wall.png"
                              alt="Upload your designs"
                              layout="fill" // This makes the image responsive within the container
                              className="rounded-lg"
                              objectFit="cover" // This will cover the area without stretching
                          />
                      </div>
                      <div className="text-center w-64"> {/* Set the width of the text to match the image */}
                          <h3 className="text-xl text-[#2c2c2c] mb-2 font-poppins font-medium">1. Upload Your Designs</h3>
                          <p className="text-black text-s">Upload your wallpaper or wall tiles designs</p>
                      </div>
                  </div>
              </div>
  
              <button className="mt-6 mb-15 px-6 py-2 bg-[#80471c] text-white rounded-full font-medium">
                  Get Started
              </button>
          </div>
      );
  };
  
  export default UploadGuideComponent;
    




      
      

 
  
  