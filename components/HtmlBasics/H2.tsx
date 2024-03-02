import React from "react"

type Props = {
    children : String
    className? : String
}

const H2 : React.FC<Props> = ({children,className}) => {
  return (
    <div className={`block text-[1.5em] my-[0.83em] mx-0 font-bold ${className}`}>{children}</div>
  )
}

export default H2