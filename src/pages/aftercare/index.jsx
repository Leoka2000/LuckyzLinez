import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Main from './aftercare-main/main'
import Hypafix from './hypafix/hypafix'
import Nonhypafix from './nonhypafix/nonhypafix'
import Footer from '../../components/footer/footer'


const Index = () => {
  return (
    < section className='aftercare-section'>
      <Navbar/>
      <Main/>
      <Hypafix/>
      <Nonhypafix/>
      <Footer/>
    </section>
  )
}

export default Index
