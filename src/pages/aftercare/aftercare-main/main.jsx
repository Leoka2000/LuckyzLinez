import React from 'react'
import './main.css'
import OdinsLogo from '../../../assets/brand/odins-logo.png'
import LuckyLogo from '../../../assets/brand/Logo.png'

const Main = () => {
  return (
    <section className='aftercare-main-section'>
      <h1>AFTERCARE</h1>
      <div>
        <span> <img src={OdinsLogo} alt="Odin's Eye Logo" /></span>

        <span id='luckyzlinez-span'> <img id='lucky-logo' src={LuckyLogo} alt="luckyzlinezlogo" /></span>
      </div>
    </section>
  )
}

export default Main
