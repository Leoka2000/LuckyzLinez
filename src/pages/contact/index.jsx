import React from 'react'
import './rules/rules.css'
import ContactDetails from './details/contact-details'
import Form from './form/form'
import Rules from './rules/rules'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

const Index = () => {
  return (
    <section className='contact-section'>
      <Navbar/>
       <Rules/>
        <ContactDetails/>
        <Form/>
        <Footer/>
     
    </section>
  )
}

export default Index
