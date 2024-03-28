"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import HomeSvg from "./HomeSvg"
import UploadSvg from "./UploadSvg"
import UserSvg from "./UserSvg"
import SettingsSvg from "./SettingSvg"


const navList = [
    {
        name: "Home",
        icon: <HomeSvg className={`self-center`}/>,
        link: "/dashboard",
    },
    {
        name: "Designs",
        icon: <UploadSvg color="#56585A" className={"self-center"}/>,
        link: "/dashboard/upload-design",
    },
    {
        name: "Profile",
        icon:  <UserSvg color="#56585A" className={"self-center"}/>,
        link: "/dashboard/profile",
    },
    {
        name:"Settings",
        icon: <SettingsSvg color="#56585A" className={"self-center"}/>,
        link: "/dashboard/settings",
    }
]

const BottomNav = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <div className="fixed bottom-0 flex w-full h-[56px] mt-auto justify-evenly items-center bg-[#DEDEDE]">
                <Link
                    href={'/dashboard'}
                    className={`flex flex-col ${pathname === "/dashboard" ? "text-primary" : "text-[#56585A]"}`}
                >
                    <HomeSvg width={24} height={24} style={{stroke: pathname === '/dashboard'? "blue" : "black"}} className={`self-center`}/>
                    <p className={` text-xs`}>{"Home"}</p>
                </Link>
                <Link
                    href={'/dashboard/upload-design'}
                    className={`flex flex-col ${pathname === "/dashboard/upload-design" ? "text-primary" : "text-[#56585A]"}`}
                >
                    <UploadSvg width={24} height={24} style={{stroke: pathname === '/dashboard/upload-design'? "blue" : "black"}} className={`self-center`}/>
                    <p className={` text-xs`}>{"Designs"}</p>
                </Link>
                <Link
                    href={'/dashboard/profile'}
                    className={`flex flex-col ${pathname === "/dashboard/profile" ? "text-primary" : "text-[#56585A]"}`}
                >
                    <UserSvg width={24} height={24} style={{stroke: pathname === '/dashboard/profile'? "blue" : "black"}} className={`self-center`}/>
                    <p className={`text-xs`}>{"Account"}</p>
                </Link>
                <Link
                    href={'/dashboard/settings'}
                    className={`flex flex-col ${pathname === "/dashboard/settings" ? "text-primary" : "text-[#56585A]"}`}
                >
                    <SettingsSvg width={24} height={24} style={{stroke: pathname === '/dashboard/settings'? "blue" : "black"}} className={`self-center`}/>
                    <p className={` text-xs `}>{"Settings"}</p>
                </Link>
            
    </div>
  )
}

export default BottomNav
