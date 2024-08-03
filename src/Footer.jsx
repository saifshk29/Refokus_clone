import React from 'react'

function Footer() {
  return (
    <div className="w-full mt-10">
        <div className="max-w-screen-xl py-10 mx-auto flex gap-32">
            
                <div className="basis-1/2">
                    <h1 className="text-[11rem] font-semibold leading-none tracking-tight">reofokus.</h1>
                    <div className="flex gap-8">
                        {
                            ["Privacy Policy","Cookie Policy","Impressum","Terms"].map((item,index)=>(
                                <a href="" className="mt-2 text-zinc-600" key={index}>{item}</a>
                            ))
                        }
                    </div>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3">
                        <h4 className="text-zinc-600 mb-10">Socials</h4>
                        {
                            ["Instagram","Twitter","LinkedIn"].map((item,index)=>(
                                <a href="" className=" block mt-2 text-zinc-600" key={index}>{item}</a>
                            ))
                        }
                    </div>
                    <div className="basis-1/3">
                        <h4 className="text-zinc-600 mb-10">Sitemap</h4>
                        {
                            ["Home","Work","Careers","Contact"].map((item,index)=>(
                                <a href="" className=" block mt-2 text-white" key={index}>{item}</a>
                            ))
                        }
                    </div>
                    <div className="basis-1/2 flex flex-col items-end">
                            <p className="text-right">
                                Refokus is pioneering digital agency driven by
                                design and empowered by technology.
                            </p>
                            <img
                                src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
                                alt=""
                                className="w-[20rem] px-4 py-1 mt-8 bg-blue-600"
                            />
                    </div>
                </div>
                
            
        </div>
        
    </div>
    
  )
}

export default Footer