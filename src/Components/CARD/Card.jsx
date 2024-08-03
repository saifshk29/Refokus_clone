import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import { motion } from 'framer-motion'

function Card({width,start,para,heading,desc,hover}) {
  return (
    <motion.div 
    whileHover={{padding :"25px"}}
    className={`${width} rounded-xl min-h-[30rem] bg-[#323238] p-5 flex flex-col justify-between
    ${hover ? "hover:bg-violet-500" : ""}
    `}>
        <div className="w-full ">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-sm">{heading}</h1>
                <IoIosArrowRoundForward />
            </div>
            <p className={`w-[50%] text-3xl font-medium  mt-5`} >{desc}</p>
        </div>
        <div>
            
            {
                start && (
                    <>
                        <h1 className="text-8xl w-full font-semibold font-sans">Start a Project</h1>
                        <button className=" px-5 py-2 rounded-full  border-[1px] mt-5">Contact us</button>
                    </>
                    
                )
            }
            {
                para && (
                        <div className="text-[15px] text-zinc-400">
                            <p>Web Design, Webflow</p>
                            <p>Development, and Creative</p>
                            <p>Development</p>
                        </div>
                )
            }

            
        </div>
    </motion.div>
  )
}

export default Card