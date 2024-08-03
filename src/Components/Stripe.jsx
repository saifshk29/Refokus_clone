import React from 'react'
import Stripes from './Stripes'


function Stripe({value}){
    
    return(
        <div className="w-[16.66%] px-5 py-4 flex justify-between items-center border-t-[1.4px] border-b-[1.4px] border-r-[1.4px] border-zinc-600">
            <img className="h-7" src={value.url} alt="" />
            <span className="font-semibold">{value.number}</span>
        </div>
    )
}

export default Stripe