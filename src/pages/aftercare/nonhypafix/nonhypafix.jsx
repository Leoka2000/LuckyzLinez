import React, { useState } from 'react'
import '../hypafix/hypafix.css'
import './nonhypafix.css'
import { GrStatusGood } from 'react-icons/gr'
import Tattooing2 from '../../../assets/brand/professional2.jpeg'
import { MdLocalHospital } from 'react-icons/md'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Blurhash } from 'react-blurhash'

const Nonhypafix = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [ref1, inView1] = useInView({
        threshold: 0.5,
        triggerOnce: true,
        delay: 1.5
    });

    const blurhash = 'LIEVKa4.Q-E#_NnNELIqXm-U9usD'
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <section className='hypafix-section'>
            <div className='section-braker'>
                <div></div>
            </div>
            <motion.div
                ref={ref1}
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2 }}
                id='nonhypafix-main'
                className='hypafix-main'>

                <div className='left'>
                    <header>
                        <div>
                            <h4>NON-HYPAFIX AFTERCARE</h4>
                            <span><MdLocalHospital /></span>
                        </div>
                        <h4>Wear wrap for <strong>24 Hours. Remove the next morning.</strong></h4>
                    </header>
                    <div className='hypafix-content'>
                        <ul>
                            <li>Wash hands before caring for your new tattoo.</li>
                            <li>Wash with unscented soaps and use <strong> NATURAL LOTIONS 3-5 TIMES </strong> a day or when you notice the skin becoming tight.</li>
                            <li>Keep out of heat sources and direct sunlight for the first month.</li>
                            <li>After the first month use a strong spf sunscreen if you plan on being out in the sun for extended periods of time.</li>
                        </ul>

                    </div>
                </div>

                <div className='right'>

                    <div className='hypafix-thumbnail'>
                        {isLoading && blurhash && <Blurhash hash={blurhash} width='100%' height='100%' />}
                        <img
                            style={isLoading ? { display: 'none' } : {}}
                            onLoad={handleImageLoad}
                            src={Tattooing2}/>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default Nonhypafix
