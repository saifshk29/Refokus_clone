import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
const Button = ({ title = "Start a Project" }) => {
  return (
    <div className="min-w-40 bg-zinc-100 text-black flex items-center justify-between text-sm rounded-full px-4 py-2">
        <span className="font-regular text-sm">{title}</span>
        <BsArrowReturnRight/>
    </div>
  )
}

export default Button