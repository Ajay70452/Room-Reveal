import React, { FC } from "react"

interface Props{
  onSearch: (searchParam:String) => void
}

const SearchBar: FC<Props> = ({onSearch}) => {

  return (
    <input 
      type="text"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
      className="bg-[#EEEEEE] w-full px-4 py-2 text-lg mt-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-2xl text-black"
    />
  )
}

export default SearchBar