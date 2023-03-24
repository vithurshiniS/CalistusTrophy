import React from 'react'
import './mobilecarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import fb1 from '../../assets/football/fb1.jpeg';
import fb2 from '../../assets/football/fb2.jpeg';
import fb3 from '../../assets/football/fb3.jpeg';
import fb4 from '../../assets/football/fb4.jpeg';
import fb5 from '../../assets/football/fb5.jpeg';
import fb6 from '../../assets/football/fb6.jpeg';
import fb7 from '../../assets/football/fb7.jpeg';
import fb8 from '../../assets/football/fb8.jpeg';
import fb9 from '../../assets/football/fb9.jpeg';


// const images = [BM1,BM2,BM3,BM4,BM5,BM6,BM7,BM9,BM8,BM10,BM11,BM12]

export default function MFootball() {
    return (
        <div className='carouselcontainer'>

           <Carousel className='carousel' fade  interval={1200}  indicators={false} >
          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb2}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb3}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb4}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb5}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb6}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb7}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb8}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={fb9}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          

        </Carousel>
        </div>
      );
    
}