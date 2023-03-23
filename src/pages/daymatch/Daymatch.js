import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './daymatch.css';
import dmatch1 from '../../assets/daymatch/dmatch1.jpeg';
import dmatch2 from '../../assets/daymatch/dmatch2.jpeg';
import dmatch3 from '../../assets/daymatch/dmatch3.jpeg';
import dmatch4 from '../../assets/daymatch/dmatch4.jpeg';


export default function Daymatch() {
    return (
        <div className='whole'>
            <p>The dawn has arrived, but the game went on. </p>
        
        <Carousel className='carousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='carouselitem'>
            <div className='imgcontain'>
            <img
              className="imgset"
              src={dmatch1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain'>
            <img
              className="imgset"
              src={dmatch2}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain3'>
            <img
              className="imgset"
              src={dmatch3}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain3'>
            <img
              className="imgset"
              src={dmatch4}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          
        
        </Carousel>
        </div>
      );
    
}
