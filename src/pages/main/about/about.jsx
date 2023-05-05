import React, {useState} from 'react'
import './about.css'
import { GoLocation } from 'react-icons/go'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Lucianow from '../../../assets/brand/professional3.jpeg'
import { Blurhash } from 'react-blurhash';

const About = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [ref1, inView1] = useInView({
        threshold: 0.5,
        triggerOnce: true,
        delay: 1.8
    });

    const blurhash = 'L37U0Y0J00?w_2nh0fo#00-q%Nng'

    const handleImageLoad = () => {
        setIsLoading(false);
      };
    
       
    return (
        <motion.section 
        ref={ref1}
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2 }}
        id='about' className='about-section'>
            <div className='about-left'>
                <div className='img-thumbnail'>
                {isLoading && blurhash && <Blurhash hash={blurhash} width='100%' height='100%' />}
                    <img
                     style={isLoading ? { display: 'none' } : {}}
                     onLoad={handleImageLoad}
                    src={Lucianow} />
                    
                </div>
            </div>
            <div className='about-right'>
                <h1> WHO AM I </h1>
                <h3 >Hey everyone! My name is Luciano and I am an artist in Winnipeg Manitoba specializing in black and traditional style tattooing mixed with my own flair.</h3>
                <p>You can find me at Odin's Eye Tattoo, the full address is right below this text. I look forward to working with you!</p>

                <div className='about-address-wrapper'>

                    <span><GoLocation /></span>
                    <div className='address-text-wrapper'>
                        <h1>My Location</h1>
                        <div><p>Odin's Eye Tattoo & Piercing</p></div>
                        <div><p>2005 Portage Ave, MB R3J 0K3</p></div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About
