import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { COMMON } from '../../../data/database-common';
import CommonContent from './common-content';
import './common.css';

const Common = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id='flashes' className='common-section' ref={ref}>
      <header>
        <motion.h1
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
        >
          CUSTOM TATTOOS
        </motion.h1>
        <motion.p
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.7, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          Some of my recent work is displayed here. When contacting me, please specify the ID of the one you would like to use as reference.
        </motion.p>
      </header>
      <motion.main
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.7, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className='common-main'
      >
        {COMMON.map((product, index) => (
          <div key={product.title}
          
          >
            <motion.div
              className='product-container'
              initial='hidden'
              animate={controls}
              variants={{
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.5
                  },
                }),
                hidden: {
                  opacity: 0,
                  y: 100,
                },
              }}
              custom={index}
            >
              <CommonContent data={product} />
            </motion.div>
          </div>
        ))}
      </motion.main>
    </section>
  );
};

export default Common;
