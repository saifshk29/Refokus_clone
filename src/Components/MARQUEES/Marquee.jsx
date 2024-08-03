import React from 'react'
import { motion } from 'framer-motion'

function Marquee({ imgurl, direction }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Blur Effect */}
      <div className="absolute left-0 top-0 h-full w-[30%] bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent pointer-events-none z-10"></div>
      
      {/* Right Blur Effect */}
      <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-zinc-900 via-zinc-900/50 to-transparent pointer-events-none z-10"></div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-shrink-0 gap-20 py-8 pr-24"
        >
          {imgurl.map((url, index) => (
            <img key={index} src={url} className="w-[8vw]" alt={`marquee-${index}`} />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-shrink-0 gap-20 py-8 pr-24"
        >
          {imgurl.map((url, index) => (
            <img key={index} src={url} className="w-[8vw]" alt={`marquee-${index}`} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee
