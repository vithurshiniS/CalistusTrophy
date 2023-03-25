import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './daymatch.css';
import dmatch1 from '../../assets/daymatch/dmatch1.jpeg';
import dmatch2 from '../../assets/daymatch/dmatch2.jpeg';
import dmatch3 from '../../assets/daymatch/dmatch3.jpeg';
import dmatch4 from '../../assets/daymatch/dmatch4.jpeg';


export default function Daymatch() {
    return (
        <div className='daymatchcontainer'>
          <div className='daymatchtextcontainer'>
          <p className='daymatchtext'>The dawn has arrived, but the game went on. </p>
          </div>
            
        
        <Carousel className='daycarousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='daycarouselitem'>
            <div className='dayimgcontain'>
            <img
              className="dayimgset"
              src={dmatch1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='daycarouselitem'>
          <div className='dayimgcontain'>
            <img
              className="dayimgset"
              src={dmatch2}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='daycarouselitem'>
          <div className='dayimgcontain'>
            <img
              className="dayimgcontain_height"
              src={dmatch3}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='daycarouselitem'>
          <div className='dayimgcontain'>
            <img
              className="dayimgcontain_height"
              src={dmatch4}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          
        
        </Carousel>
        </div>
      );
    
}
