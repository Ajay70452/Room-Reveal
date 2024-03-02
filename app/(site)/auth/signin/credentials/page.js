import InputForm from "@/components/Auth/InputForm"
import BackBtn from "@/components/Button/BackBtn"
import Image from "next/image"

const page = () => {
    return (
        <div className="relative flex h-full min-h-screen w-full flex-1 flex-col overflow-y-hidden border-black bg-[url('/images/auth/login-background2.jpg')] bg-cover">
            {/* div for Logo holding */}
            <div className="absolute mx-2 mt-3">
                <BackBtn />
            </div>
            <div className="my-14 w-[300px] self-center">
                <Image
                    src="/images/logo/logo-plain.png"
                    alt="logo"
                    width={100}
                    height={50}
                    quality={100}
                    className="hidden h-auto w-full max-w-full  dark:block"
                    priority
                />
                <Image
                    src="/images/logo/logo-plain.png"
                    alt="logo"
                    width={100}
                    height={50}
                    quality={100}
                    className="h-auto w-full max-w-full dark:hidden"
                    priority
                />
            </div>
            <div className="text-primary font-bold text-2xl leading-9 w-full text-center">
                Login with email
            </div>
            <InputForm />
        </div>
    )
}

export default page