  
'use client'
import styles from './style.module.scss'
import { useState } from 'react';  
import useMousePosition from './useMousePosition';
import Rounded from '../../common/RoundedButton';
import { useInView, motion } from 'framer-motion';


export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          I bridge technology with integrity in cybersecurity, offering a unique perspective, Committed to empowering organizations in the cyber landscape.
          </p>
      </motion.div>
      <div className={styles.body}>
        <p> Let's  <span>set new security standards,</span>fearlessly innovating to safeguard data and uphold integrity.</p>
      </div>
      
    </main>
  )
}













