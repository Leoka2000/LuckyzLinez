import React from 'react'
import './rules.css'
import { MdAttachMoney }  from 'react-icons/md'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'
import { MdOutlineFastfood } from 'react-icons/md'
import { BsCapsulePill } from 'react-icons/bs'
import {MdDirtyLens} from 'react-icons/md'
import {BsBandaid} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Rules = () => {
  return (
    <section className='rules-section'>
      <main className='rules-main'>
        <h1>PLEASE READ THIS SECTION CAREFULLY BEFORE CONTACTING ME:</h1>
        <div className='rules-text-wrapper'>
          <div><span><MdAttachMoney/></span><p>My hourly rate is 160$/hour + tax.</p></div>
          <div><span><FaMoneyCheckAlt/></span><p>Deposit is 100$ and it will go torwards the total cost of your tattoo.</p></div>
          <div><span><BiTime/></span><p>I require 48 hours notice for rescheduling or canceling an appointment. if you can't manage to do so, you will need to make another appoitnment and pay an extra deposit.</p></div>
          <div><span><MdOutlineFastfood/></span><p>Ensure you eat, hydrate & rest prior to your appointment.</p></div>
          <div><span><MdDirtyLens/></span><p>Don't show up in dirty, smelly work boots. Respect our hygienic work environnment as it is both important AND necessary.</p></div>
          <div><span><BsCapsulePill/></span><p>Please don't come hangover or under the effects of drugs.</p></div>
          <div><span><BsBandaid/></span><p>For aftercare instructions, visit the next page of my website <Link style={{color: 'blue'}} target='_blank' to='/aftercare'>here</Link></p></div>
        </div>
      </main>
    </section>
  )
}

export default Rules
