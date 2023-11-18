import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import './contact-details.css'
import { motion} from 'framer-motion';

// 
const ContactDetails = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <div className='contact-wrapper'>
      <header>
        <h2
          initial='hidden'
          animate='visible'
          variants={variants}
          exit='hidden'
        >
          CONTACT FORM
        </h2>
      </header>
    
        <div
          className='contact-icons-wrapper'
          initial='hidden'
          animate='visible'
          variants={variants}
          exit='hidden'
        >
          <div className='contact-row'>
            <span>
              <HiLocationMarker />
            </span>
            <div>
              <h3>Address:</h3>
              <p>2005 Portage Ave</p>
              <p>Winnipeg, Manitoba</p>
              <p>R3J 0K3</p>
            </div>
          </div>
          <div className='contact-row'>
            <span>
              <AiOutlineInstagram id='instagram'/>
            </span>
            <div>
              <h3>Instagram:</h3>
              <p>@luckyzlinez</p>
            </div>
          </div>
          <div className='contact-row'>
            <span>
              <AiOutlineMail />
            </span>
            <div>
              <h3>Email:</h3>
              <p>tattoosbyluciano@outlook.com</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ContactDetails