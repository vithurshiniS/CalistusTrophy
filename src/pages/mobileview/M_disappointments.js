import React from 'react'
import './mobilecarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import dis1 from '../../assets/disappointments/dis1.jpeg';
import dis2 from '../../assets/disappointments/dis2.jpeg';


// const images = [BM1,BM2,BM3,BM4,BM5,BM6,BM7,BM9,BM8,BM10,BM11,BM12]

export default function MDisappointments() {
    return (
        <div className='carouselcontainer'>

           <Carousel className='carousel' fade  interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={dis1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={dis2}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

        </Carousel>
        </div>
      );
    
}