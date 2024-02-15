import React from "react"

interface Props{
    clickHandler : (arg : React.MouseEvent<HTMLButtonElement>) =>void,
    children : React.ReactNode
}

const SecondaryButton :React.FC<Props> = ({clickHandler,children}) => {
    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) =>{
        clickHandler(e);
    }

  return (
    <button type="button" className="flex items-center justify-center border px-10 py-2 text-white font-bold text-[22px] border-white rounded-3xl h-fit hover:bg-white hover:text-primary duration-300 ease-in-out hover:shadow-xl"
        onClick={handleClick}
    >
        {children}
    </button>
  )
}

export default SecondaryButton