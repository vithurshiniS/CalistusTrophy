import React from 'react'
import {useRef, useEffect, useState} from 'react'
import './badminton.css';
import {motion} from 'framer-motion';
import badminton1 from '../../assets/badminton/Badminton1.jpeg';
import badminton2 from '../../assets/badminton/Badminton2.jpeg';
import badminton3 from '../../assets/badminton/Badminton3.jpeg';
import badminton4 from '../../assets/badminton/Badminton4.jpeg';
import badminton5 from '../../assets/badminton/Badminton5.jpeg';
import badminton6 from '../../assets/badminton/Badminton6.jpeg';
import badminton7 from '../../assets/badminton/Badminton7.jpeg';
import badminton8 from '../../assets/badminton/Badminton8.jpeg';

const images = [badminton1,badminton2,badminton3,badminton4,badminton5,badminton6,badminton7,badminton8]

export default function Badminton() {

    const [width, setWidth] = useState(0);
    const carousel1 = useRef();

    useEffect(() => {
        console.log(carousel1.current.scrollWidth, carousel1.current.offsetWidth);
        setWidth(4100);
    },[])

  return (
    <div className='badmintoncontainer'>
        <div className='badmintontextcontainer'>
            <p className='badmintontext'>This year, the first-ever badminton championship was staged to encourage girls to participate in sports and advance their abilities. The E18 squad, who created history by becoming the first champions, displayed a range of emotions during the tournament.</p>
        </div>
        <motion.div ref={carousel1} className='carousel'>
            <motion.div drag='x' dragConstraints={{right:0,left:-width}} className='inner-carousel' > 
                {images.map(image =>{
                    return(
                        <motion.div className='item' key={image}>
                        <img src={image}></img>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    </div>
  )
}
