import React from 'react'
import './mobilecarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import vb1 from '../../assets/volleyball/vb1.jpeg';
import vb2 from '../../assets/volleyball/vb2.jpeg';
import vb3 from '../../assets/volleyball/vb3.jpeg';
import vb4 from '../../assets/volleyball/vb4.jpeg';
import vb5 from '../../assets/volleyball/vb5.jpeg';
import vb6 from '../../assets/volleyball/vb6.jpeg';
import vb7 from '../../assets/volleyball/vb7.jpeg';
import vb8 from '../../assets/volleyball/vb8.jpeg';


// const images = [BM1,BM2,BM3,BM4,BM5,BM6,BM7,BM9,BM8,BM10,BM11,BM12]

export default function MVolleyball() {
    return (
        <div className='carouselcontainer'>

           <Carousel className='carousel' fade  interval={1200}  indicators={false} >
          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb2}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb3}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb4}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb5}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb6}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb7}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
            <div className='carouselimagecontainer'>
            <img
              className="carouselimage"
              src={vb8}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

        </Carousel>
        </div>
      );
    
}