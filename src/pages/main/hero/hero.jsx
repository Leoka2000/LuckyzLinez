import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import Luciano from '../../../assets/brand/Luciano-bg.png';
import LuckyLinez from '../../../assets/brand/luckyzlinez.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const text = "Welcome! Here you will discover more about me and my art";
  const textArray = text.split('');


  return (
    <section id='hero' className='hero-section'>
      <div className='hero-wrapper'>
     <img src={LuckyLinez}/>
        <motion.h1
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.6,
              duration: 0.8,
              bounce: 0.3,
            },
          }}
          initial={{ y: -20, opacity: 0 }}
        >
          {textArray.map((letter, index) => (
            <motion.span
              key={index}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -20, opacity: 0 }}
              transition={{ delay: index * 0.05, bounce: 0.3 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <Link to="/contact"> <button>MAKE APPOINTMENT</button></Link>
      </div>
      <ScrollLink to="about" spy={true} smooth={true} offset={-20} duration={500}><img src={Luciano}/></ScrollLink> 
    </section>
  );
};

export default Hero;
