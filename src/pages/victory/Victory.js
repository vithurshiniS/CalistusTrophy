import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './victory.css';
import victory1 from '../../assets/victory/victory1.jpeg';
import victory2 from '../../assets/victory/victory2.jpeg';
import victory3 from '../../assets/victory/victory3.jpeg';
import victory4 from '../../assets/victory/victory4.jpeg';
import victory5 from '../../assets/victory/victory5.jpeg';
import victory6 from '../../assets/victory/victory6.jpeg';
import victory7 from '../../assets/victory/victory7.jpeg';

export default function Victory() {

 
        // const [index, setIndex] = useState(0);
      
        // const handleSelect = (selectedIndex, e) => {
        //   setIndex(selectedIndex);
        // };

    return (
        <div className='whole'>
            <p>And finally, cheers to the trend continuing! The 18A team won and proclaimed themselves the 10th Calistus Trophy champions. The crew ultimately succeeded, and they were extremely thrilled with their accomplishment and celebrated their happiness.</p>
        
        <Carousel className='carousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='carouselitem'>
            <div className='imgcontain'>
            <img
              className="imgset"
              src={victory1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain'>
            <img
              className="imgset"
              src={victory2}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain3'>
            <img
              className="imgset"
              src={victory3}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain'>
            <img
              className="imgset"
              src={victory4}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain'>
            <img
              className="imgset"
              src={victory5}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain'>
            <img
              className="imgset"
              src={victory6}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain'>
            <img
              className="imgset"
              src={victory7}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>
        
        </Carousel>
        </div>
      );
    
}
