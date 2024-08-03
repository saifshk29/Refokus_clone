import React from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import { useState } from 'react'

import arqitel from "/vid/arqitel.webm"
import yahoo from "/vid/public_videos_yahoo.webm"
import ttr from "/vid/ttr.webm"
import yir from "/vid/public_videos_yir.webm"

function Products() {
    
    const products = [
        {
            title:"Arqitel",
            description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true,
            case:false,
        },
        {
            title:"TTR",
            description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live:true,
            case:false,
        },
        {
            title:"YIR 2022",
            description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live:true,
            case:false,
        },
        {
            title:"Yahoo!",
            description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live:true,
            case:true,
        },
    ]
    const [pos,SetPos] = useState(null);
    const mover = (position)=>{
        SetPos(position*23);
        
    }
  
   
  return (
    <div className="bg-zinc-900 mt-20 relative">
        {
            products.map((CurrentElement,Index)=>(
                <Product value={CurrentElement} key={Index} mover={mover} count={Index} />
            ))
        }
        
          
                    <div className=" w-full h-full absolute top-0 pointer-events-none overflow-hidden">
                        <motion.div 
                        initial={{y:pos,x:"-50%"}}
                        animate ={{y:pos+`rem`}}
                        className="window absolute w-[120vw] h-[23rem]  left-[44%] overflow-hidden">
                           
                            <motion.div 
                                
                                animate={{y:-pos+`rem`}}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                                className="w-full h-full flex items-center  text-white">
                                    
                                    {
                                        pos === 0 && (
                                            <div className="w-full relative h-[15rem] z-50 bg-[#5355EE] flex items-center ">
                                                <video autoPlay muted loop className="w-[30rem] h-[23rem] absolute left-[38%] rounded-[5%] overflow-hidden">
                                                    <source src={arqitel} type="video/webm" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            

                                            
                                        )
                                    }
                            </motion.div>

                            <motion.div
                                
                                animate={{y:-pos+`rem`}}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                                className="w-full h-full flex items-center text-white">
                                    
                                    {
                                        pos === 23 && (
                                            <div className="w-full relative h-[15rem] z-50 bg-[#3E4365] flex items-center ">
                                                <video autoPlay muted loop className="w-[30rem] h-[23rem] absolute left-[38%] rounded-[5%] overflow-hidden">
                                                    <source src={ttr} type="video/webm" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        )
                                    }
                            </motion.div>
                            
                            <motion.div
                                
                                animate={{y:-pos+`rem`}}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                                className="w-full h-full flex items-center text-white">
                                    
                                {
                                        pos === 46 && (
                                            <div className="w-full relative h-[15rem] z-50 bg-[#5355EE] flex items-center ">
                                                <video autoPlay muted loop className="w-[30rem] h-[23rem] absolute left-[38%] rounded-[5%] overflow-hidden">
                                                    <source src={yir} type="video/webm" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        )
                                    }
                            </motion.div>
                            <motion.div
                                
                                animate={{y:-pos+`rem`}}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} 
                                className="w-full h-full flex items-center text-white">
                                    
                                {
                                        pos === 69 && (
                                            <div className="w-full relative h-[15rem] z-50 bg-[#24014F] flex items-center ">
                                                <video autoPlay muted loop className="w-[30rem] h-[23rem] absolute left-[38%] rounded-[5%] overflow-hidden">
                                                    <source src={yahoo} type="video/webm" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        )
                                    }
                            </motion.div>

                        </motion.div>
                    </div>
            
        
    </div>
  )
}

export default Products