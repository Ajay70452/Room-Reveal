import React from "react"

interface Props{
    clickHandler : (arg : React.MouseEvent<HTMLButtonElement>) =>void,
    children : React.ReactNode,
    className? : String
}

const PrimaryButton2 :React.FC<Props> = ({clickHandler,children,className}) => {
    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) =>{
        clickHandler(e);
    }

  return (
    <button type="button" className={`${className} flex items-center justify-center w-full h-full text-white bg-[#3156D8] rounded-[20px] leading-6`}
        onClick={handleClick}
    >
        {children}
    </button>
  )
}

export default PrimaryButton2