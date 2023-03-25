import React from 'react'
import {useRef, useEffect, useState} from 'react'
import './football.css';
import {motion} from 'framer-motion';
import fb1 from '../../assets/football/fb1.jpeg';
import fb2 from '../../assets/football/fb2.jpeg';
import fb3 from '../../assets/football/fb3.jpeg';
import fb4 from '../../assets/football/fb4.jpeg';
import fb5 from '../../assets/football/fb5.jpeg';
import fb6 from '../../assets/football/fb6.jpeg';
import fb7 from '../../assets/football/fb7.jpeg';
import fb8 from '../../assets/football/fb8.jpeg';
import fb9 from '../../assets/football/fb9.jpeg';
import swiping from '../../assets/icons/swiping.png';

const images = [fb1,fb2,fb3,fb4,fb5,fb6,fb7,fb8,fb9]

export default function Football() {

    const [width, setWidth] = useState(0);
    const carousel1 = useRef();

    useEffect(() => {
        console.log(carousel1.current.scrollWidth, carousel1.current.offsetWidth);
        setWidth(4750);
    },[])

  return (
    <div className='footballcontainer'>
        <div className='footballtextcontainer'>
            <p className='footballtext'>The Clash of Brotherhood Football Championship took place this year and was similarly passionate. The match was won by Team E16, which also demonstrated a range of drive and commitment. </p>
        </div>
        {/* <div> */}
        <motion.div ref={carousel1} className='carousel'>
            <motion.div drag='x' dragConstraints={{right:0,left:-width}} className='inner-carousel'>
                {images.map(image =>{
                    return(
                        <motion.div className='item' key={image}>
                        <img src={image}></img>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    
            <img className='swipeicon' src={swiping}></img>
        {/* </div> */}
        
       
    </div>
  )
}
