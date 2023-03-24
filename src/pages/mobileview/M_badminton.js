import React from 'react'
import './mobilecarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import badminton1 from '../../assets/badminton/Badminton1.jpeg';
import badminton2 from '../../assets/badminton/Badminton2.jpeg';
import badminton3 from '../../assets/badminton/Badminton3.jpeg';
import badminton4 from '../../assets/badminton/Badminton4.jpeg';
import badminton5 from '../../assets/badminton/Badminton5.jpeg';
import badminton6 from '../../assets/badminton/Badminton6.jpeg';
import badminton7 from '../../assets/badminton/Badminton7.jpeg';
import badminton8 from '../../assets/badminton/Badminton8.jpeg';


// const images = [BM1,BM2,BM3,BM4,BM5,BM6,BM7,BM9,BM8,BM10,BM11,BM12]

export default function MBadminton() {
    return (
        <div className='carouselcontainer'>

           <Carousel className='carousel' fade  interval={1200}  indicators={false} >
          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton2}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton3}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton4}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton5}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton6}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton7}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={badminton8}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

        </Carousel>
        </div>
      );
    
}