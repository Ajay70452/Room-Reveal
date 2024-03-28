"use client";
import Link from "next/link";
import PrimaryButton2 from "../Button/PrimaryButton2";

const options = [
  {
    name: "Edit Profile",
    img: "/images/icon/edit-profile.svg",
    url: "/dashboard/profile/edit-profile",
  },
  {
    name: "Subscription and Billing",
    img: "/images/icon/subscription-billing.svg",
    url: "/dashboard/profile/subscription-billing",
  },
  {
    name: "Security Settings",
    img: "/images/icon/security.svg",
    url: "/dashboard/profile/security-settings",
  },
];

const Profile = () => {
  const changePlanHandler = () => {
    console.log("Change Plan");
  };


  return (
    <main className="flex flex-col h-full max-w-screen ">

        {/* profile details */}
        <div className="w-full my-10 px-6">
            <div className="flex justify-end items-center gap-1">
              <span className="rounded-full w-4 h-4 bg-primary"></span> Pro member
            </div>

            <div className="relative w-full px-[18px] border shadow-md pb-5 rounded-xl mt-12">
                {/* image div */}
                <div className="absolute left-1/2 -translate-x-1/2 h-[96px] w-[96px] -top-12 rounded-full p-[7px] border-t border-r -rotate-45 bg-white shadow-md">
                        <img src="/images/blog/blog-01.png" alt="user" className="w-full rotate-45 h-full object-cover rounded-full" />
                </div>

                <div className="flex flex-col justify-end items-center mt-12">
                    <div className=" text-2xl text-primary font-[500]">
                        {"Username"}
                    </div>
                    <div className="">
                        {"example@gmail.com"}
                    </div>
                    <div className="flex w-full justify-between bg-[#F0F0F0] rounded-[14px] border border-[#B3B3B3] py-2 text-black mt-6">
                          <div className="flex flex-col w-full justify-center items-center">
                              Credit Left :
                              <span className="text-[#F28C46] text-[32px] leading-9">500</span>
                          </div>
                          <div className="flex flex-col w-full justify-center items-center">
                              Current Plan :
                              <span className="text-[#F28C46] text-[32px] leading-9">Basic</span>
                          </div>
                    </div>
                    <div className="w-full">
                        <PrimaryButton2
                            className={"w-full rounded-md px-4 py-2 text-lg mt-5"}
                            clickHandler={changePlanHandler}
                        >
                            Change Plan
                        </PrimaryButton2>
                    </div>
                </div>
            </div>
        </div>
        

        {/* now links portion */}
        <div className="flex flex-col gap-4 px-6">
            {options.map((option, index) => {
                return (
                    <Link
                        key={index}
                        href={option.url}
                        className="flex w-full items-center border-b-2 pb-1 mt-3"
                    >
                        <div className="h-10 w-10 flex bg-primary rounded-full items-center justify-center">
                            <img
                                src={option.img}
                                className="h-6 w-6"
                            />
                        </div>
                        <span className="mx-3 text-xl text-black font-[500]">
                            {option.name}
                        </span>
                        <div className="ml-auto flex h-6 w-6 items-center justify-center">
                            <img src="/images/icon/chevron-right.svg" />
                        </div>
                    </Link>
                );
            })}
        </div>
    </main>
  );
};

export default Profile;




{/* <main className="flex h-screen w-full flex-col">
      {/* details section 
      <section className="flex w-full flex-col items-center justify-center gap-4 bg-[#ececec] px-6 pt-10">
        <div className="flex w-full gap-3">
          <div className="h-25 w-25 min-w-[100px]">
            <img
              src="/images/blog/blog-01.png"
              className="h-full w-full rounded-full bg-white"
            />
          </div>
          <div className="mb-2 flex flex-grow flex-col justify-end gap-2 truncate">
            <div className="truncate text-2xl leading-7 text-black">
              User name
            </div>
            <div className=" truncate text-lg leading-5 text-black">
              gmail.mail@gmail.com
            </div>
          </div>
        </div>

        <div className="w-full border border-black"></div>

        <div className="flex w-full justify-between">
          <div className="flex w-fit">
            <div className="flex h-fit items-center gap-1">
              <div
                className={`h-4 w-4 rounded-full p-1 ${
                  false ? "bg-green-400" : "bg-[#D9D9D9]"
                }`}
              ></div>
              <div className=" text-lg leading-5 text-black">Pro Memeber</div>
            </div>
          </div>
          <div className="flex w-fit flex-col gap-2 text-lg leading-5 text-black">
            <div>Credit Left : {"500"}</div>
            <div>Current Plan : {"basic"}</div>
          </div>
        </div>

        <div className="mb-10 mt-5 flex w-full items-center justify-center">
          <div className="w-40">
            <PrimaryButton2
              className={"w-full rounded-2xl px-4 py-2 text-lg"}
              clickHandler={changePlanHandler}
            >
              Change Plan
            </PrimaryButton2>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col">
        <div className="mx-6 flex flex-col">
          {options.map((option, index) => {
            return (
              <Link
                key={index}
                className="flex w-full items-center border-b-2 pb-1 mt-3"
                href={option.url}
              >
                <div className="h-10 w-10 flex bg-[#d9d9d9] rounded-full items-center justify-center">
                  <img
                    src={option.img}
                    className="h-6 w-6 rounded-full"
                  />
                </div>
                <span className=" mx-2 text-xl text-black font-[500]">
                  {option.name}
                </span>
                <div className="ml-auto flex h-6 w-6 items-center justify-center">
                  <img src="/images/icon/chevron-right.svg" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
        </main> */}