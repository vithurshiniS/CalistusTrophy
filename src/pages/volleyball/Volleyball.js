import React from 'react'
import {useRef, useEffect, useState} from 'react'
import './volleyball.css';
import {motion} from 'framer-motion';
import vb1 from '../../assets/volleyball/vb1.jpeg';
import vb2 from '../../assets/volleyball/vb2.jpeg';
import vb3 from '../../assets/volleyball/vb3.jpeg';
import vb4 from '../../assets/volleyball/vb4.jpeg';
import vb5 from '../../assets/volleyball/vb5.jpeg';
import vb6 from '../../assets/volleyball/vb6.jpeg';
import vb7 from '../../assets/volleyball/vb7.jpeg';
import vb8 from '../../assets/volleyball/vb8.jpeg';


const images = [vb1,vb2,vb3,vb4,vb5,vb6,vb7,vb8]

export default function Volleyball() {

    const [width, setWidth] = useState(0);
    const carousel1 = useRef();

    useEffect(() => {
        console.log(carousel1.current.scrollWidth, carousel1.current.offsetWidth);
        setWidth(4100);
    },[])

  return (
    <div className='volleyballcontainer'>
        
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
        <div className='volleyballtextcontainer'>
            <p className='volleyballtext'>The Sujeevan Memorial Volleyball Tournament, which was held this year as well, was extremely satisfying, and team 18A emerged victorious and declared themselves the winners.</p>
        </div>
    </div>
  )
}
