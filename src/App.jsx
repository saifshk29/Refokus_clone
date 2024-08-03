import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/PRODUCT/Products'
import Marquees from './Components/MARQUEES/Marquees'
import Cards from './Components/CARD/Cards'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-full bg-zinc-900 text-white overflow-hidden">
        <Navbar/>
        <Work/>
        <Stripes/>
        <Products/>
        <Marquees/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default App