import React from "react"

type Props = {
    children : String
}

const H1 : React.FC<Props> = ({children}) => {
  return (
    <div className="block text-[2em] my-[0.67em] mx-0 font-bold">{children}</div>
  )
}

export default H1