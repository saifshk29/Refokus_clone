import React from 'react'
import Button from '../Button'

function Product({value,key,mover,count}) {
  return (
    <div className="w-full h-[23rem]  py-20 text-white z-50">
        <div onMouseEnter={()=>{
            
            mover(count);
        }} 
        
        onMouseLeave={()=>{
            mover()
        }}
        className="z-50 flex items-center justify-between mx-auto max-w-screen-xl">
            <h1 className="z-50 text-5xl font-semibold capitalize">
                {value.title}
            </h1>

            {/*LEFT SIDE PART */}
            <div className="z-50 w-1/3">
                <p className="mb-10">{value.description}</p>
                <div className="flex items-center gap-5">
                    {
                        value.live && <Button title="Live Website"/>
                    }
                    {
                        value.case && <Button title="Case Study"/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product