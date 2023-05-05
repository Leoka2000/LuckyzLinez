import React from 'react'
import Hero from '../hero/hero'
import About from '../about/about'
import Carousel from '../carousel/carousel'
import Navbar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'

const home = () => {
  return (
    <>
    <Navbar/> 
         <Hero/>
         <About/>
         <Carousel/>
         <Footer/>
    </>
  )
}

export default home
