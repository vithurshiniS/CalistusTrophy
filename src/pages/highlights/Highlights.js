import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './highlights.css';
import highlights1 from '../../assets/highlights/Highlights1.jpg';
import highlights2 from '../../assets/highlights/Highlights2.jpeg';
import highlights3 from '../../assets/highlights/Highlights3.jpeg';
import highlights4 from '../../assets/highlights/Highlights4.jpeg';
// import highlights5 from '../../assets/highlights/Highlights5.jpeg';
import highlights6 from '../../assets/highlights/Highlights6.jpeg';
import highlights7 from '../../assets/highlights/Highlights7.jpeg';
import highlights8 from '../../assets/highlights/Highlights8.jpg';
import highlights9 from '../../assets/highlights/Highlights9.jpeg';
import highlights10 from '../../assets/highlights/Highlights10.jpeg';
import highlights11 from '../../assets/highlights/Highlights11.jpeg';
import highlights12 from '../../assets/highlights/Highlights12.jpeg';
import highlights13 from '../../assets/highlights/Highlights13.jpeg';

export default function Highlights() {
    return (
        <div className='highlightscontainer'>

            <p>A glance at some of the event's highlights</p>
        
        <Carousel className='highlightscarousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='highlightscarouselitem'>
            <div className='highlightsimagecontainer'>
            <img
              className="highlightsimage"
              src={highlights1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer_height'>
            <img
              className="highlightsimage"
              src={highlights2}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer'>
            <img
              className="highlightsimage"
              src={highlights3}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer_height'>
            <img
              className="highlightsimage"
              src={highlights4}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer_height'>
            <img
              className="highlightsimage"
              src={highlights6}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer'>
            <img
              className="highlightsimage"
              src={highlights7}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer'>
            <img
              className="highlightsimage"
              src={highlights8}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer_height'>
            <img
              className="highlightsimage"
              src={highlights9}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer_height'>
            <img
              className="highlightsimage"
              src={highlights10}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer_height'>
            <img
              className="highlightsimage"
              src={highlights11}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer'>
            <img
              className="highlightsimage"
              src={highlights12}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='highlightscarouselitem'>
          <div className='highlightsimagecontainer'>
            <img
              className="highlightsimage"
              src={highlights13}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>
        
        </Carousel>
        </div>
      );
    
}
