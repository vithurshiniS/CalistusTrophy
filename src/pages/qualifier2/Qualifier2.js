import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './qualifier2.css';
import q21 from '../../assets/qualifier2/q21.jpg';
import q22 from '../../assets/qualifier2/q22.jpg';
import q23 from '../../assets/qualifier2/q23.jpg';



export default function Qualifier2() {
    return (
        <div className='qualifier2container'>
     
            <p>Qualifier 2 between 16A and 17A</p>
        
        <Carousel className='qualifier2carousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='qualifier2carouselitem'>
            <div className='qualifier2imagecontainer'>
            <img
              className="qualifier2image"
              src={q21}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='qualifier2carouselitem'>
            <div className='qualifier2imagecontainer'>
            <img
              className="qualifier2image_height"
              src={q22}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='qualifier2carouselitem'>
            <div className='qualifier2imagecontainer'>
            <img
              className="qualifier2image_height"
              src={q23}
              alt="First slide"
            />
            </div>
          </Carousel.Item>  
        
        </Carousel>
        </div>
      );
    
}
