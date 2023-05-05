import React, { useState } from 'react'
import './hypafix.css'
import { GrStatusGood } from 'react-icons/gr'
import Tattooing from '../../../assets/brand/professional.jpeg'
import { Blurhash } from 'react-blurhash';
import { MdLocalHospital } from 'react-icons/md'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hypafix = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [ref1, inView1] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    delay: 1.5
  });

  const blurhash = 'L37U0Y0J00?w_2nh0fo#00-q%Nng'

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className='hypafix-section'>

      <motion.div
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
        className='hypafix-main'>
        <div className='left'>
          <header>
            <div>
              <h4>HYPAFIX AFTERCARE</h4>
              <span><MdLocalHospital /></span>
            </div>
            <h4>Wear wrap for <strong>3-5 days.</strong>  Wrap is removed by pulling an edge and stretching the bandage. <strong>Not pulling it off like a bandaid.</strong></h4>
          </header>
          <div className='hypafix-content'>
            <ul>
              <li>Wash hands before caring for your new tattoo.</li>
              <li>Wash with unscented soaps and use <strong> NATURAL LOTIONS 3-5 TIMES </strong> a day or when you notice the skin becoming tight.</li>
              <li>Keep out of heat sources and direct sunlight for the first month.</li>
              <li>After the first month use a strong spf sunscreen if you plan on being out in the sun for extended periods of time.</li>
            </ul>
            <div className='lotions-wrapper'>
              <div>
                <strong>PERSONALLY APPROVED LOTIONS:</strong>
                <h1>CERA VE, AVENNO UNSCENTED, HUSTLE BUTTER, H2OCEAN</h1>
              </div>

              <span> <GrStatusGood /></span>

            </div>
          </div>
        </div>

        <div className='right'>

          <div className='hypafix-thumbnail'>
          {isLoading && blurhash && <Blurhash hash={blurhash} width='100%' height='100%' />}
            <img
            style={isLoading ? { display: 'none' } : {}}
            onLoad={handleImageLoad}
            src={Tattooing}/>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hypafix
