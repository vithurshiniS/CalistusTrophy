import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './qualifier1.css';
import q11 from '../../assets/qualifier1/q11.jpeg';
import q12 from '../../assets/qualifier1/q12.jpeg';
import q13 from '../../assets/qualifier1/q13.jpeg';



export default function Qualifier1() {
    return (
        <div className='qualifier1container'>
            <p>It's time for the playoffs! </p>
            <p>Qualifier 1 between 17A and 18A</p>
        
        <Carousel className='qualifier1carousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='qualifier1carouselitem'>
            <div className='qualifier1imagecontainer'>
            <img
              className="qualifier1image"
              src={q11}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='qualifier1carouselitem'>
            <div className='qualifier1imagecontainer'>
            <img
              className="qualifier1image"
              src={q12}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='qualifier1carouselitem'>
            <div className='qualifier1imagecontainer'>
            <img
              className="qualifier1image"
              src={q13}
              alt="First slide"
            />
            </div>
          </Carousel.Item>  
        
        </Carousel>
        </div>
      );
    
}
