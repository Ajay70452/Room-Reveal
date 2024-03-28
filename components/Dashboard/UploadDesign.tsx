"use client";

import PrimaryButton2 from "../Button/PrimaryButton2";

const UploadDesign = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
  };

  return (
    <div className="flex h-full w-full flex-col bg-[#ECECEC]">
      <div className="w-full mt-32 text-black">
          <h3 className="flex flex-col text-lg font-semibold leading-5 text-center">
            Design Collection Management:
            <span className="text-lg">Add or Create <span className="text-[#F28C46]">Collections!</span></span>
          </h3>
      </div>
      <div className="mt-12 flex flex-col gap-7">
        <div className="mx-8 h-[62px]">
          <PrimaryButton2 
          className={'py-5 text-xl'}
          clickHandler={handleClick}>
            Upload Wall Image
          </PrimaryButton2>
        </div>
        <div className="hide-scrollbar ml-6 flex gap-3 overflow-x-scroll">
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            className=" h-[150px] w-[110px] object-cover"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            className=" h-[150px] w-[110px] object-cover"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            className=" h-[150px] w-[110px] object-cover"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            className=" h-[150px] w-[110px] object-cover"
          />
        </div>
      </div>
      <div className="mx-6 mt-10 flex flex-col">
        <div className="text-2xl font-semibold leading-8 text-black">
          My design collection
        </div>
        <div className="mt-5 grid max-w-[327px] grid-cols-2 gap-5 mb-20 self-center">
          <div className="text-black text-center text-lg leading-6 font-semibold flex flex-col gap-2">
            <img
              src={"https://via.placeholder.com/150"}
              alt={"150"}
              className=" h-[155px] w-[155px] object-cover"
            />
            {"Design 1"}
          </div>
          <div className="text-black text-center text-lg leading-6 font-semibold flex flex-col gap-2">
            <img
              src={"https://via.placeholder.com/150"}
              alt={"150"}
              className=" h-[155px] w-[155px] object-cover"
            />
            {"Design 1"}
          </div>
          <div className="text-black text-center text-lg leading-6 font-semibold flex flex-col gap-2">
            <img
              src={"https://via.placeholder.com/150"}
              alt={"150"}
              className=" h-[155px] w-[155px] object-cover"
            />
            {"Design 1"}
          </div>
          <div className="text-black text-center text-lg leading-6 font-semibold flex flex-col gap-2">
            <img
              src={"https://via.placeholder.com/150"}
              alt={"150"}
              className=" h-[155px] w-[155px] object-cover"
            />
            {"Design 1"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDesign;
