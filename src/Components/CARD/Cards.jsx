import React from 'react'
import Card from './Card'

function Cards() {
    const content= [
        {
            heading:"Up next: Projects",
            desc:"Project & Case Studies"
        },
        {
            heading:"Get in Touch",
            desc:"Lets's get to it,together."
        }
    ]
  return (
    <div className="w-full">
        <div className="max-w-screen-xl mx-auto flex gap-1">
            <Card width={"basis-1/3"} start={false} para={true} hover={false} heading={content[0].heading} desc={content[0].desc}/>
            <Card width={"basis-2/3"} start={true} para={false} hover={true} heading={content[1].heading} desc={content[1].desc}/>
        </div>
       
    </div>
    
  )
}

export default Cards