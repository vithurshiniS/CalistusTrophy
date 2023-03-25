import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './eliminator.css';
import e1 from '../../assets/eliminator/e1.jpg';
import e2 from '../../assets/eliminator/e2.jpg';




export default function Eliminator() {
    return (
        <div className='eliminatorcontainer'>
          <div className='eliminatortextcontainer'>
          <p className='eliminatortext'>Eliminator between 16A and 19A</p>
        
          </div>
     
            
        <Carousel className='eliminatorcarousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='eliminatorcarouselitem'>
            <div className='eliminatorimagecontainer'>
            <img
              className="eliminatorimage"
              src={e1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='eliminatorcarouselitem'>
            <div className='eliminatorimagecontainer'>
            <img
              className="eliminatorimage"
              src={e2}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

         
        </Carousel>
        </div>
      );
    
}
