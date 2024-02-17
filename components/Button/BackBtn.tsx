"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackBtn = ({color} : {color? : String}) => {
    const router = useRouter();
  return (
    <button
    type="button"
    className={`border-none bg-inherit outline-none z-99999 ${color ? ('text-'+color) : "text-black"}`}
    onClick={()=> router.back()}
    >
      <Image
        alt="back-btn"
        src={"/images/icon/back-btn.png"}
        width={30}
        height={20}
        className="h-full max-w-full"
      />
    </button>
  );
};

export default BackBtn;
