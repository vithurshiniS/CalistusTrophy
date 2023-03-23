import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './nightmatch.css';
import nmatch1 from '../../assets/nightmatch/nmatch1.jpeg';
import nmatch2 from '../../assets/nightmatch/nmatch2.jpeg';
import nmatch3 from '../../assets/nightmatch/nmatch3.jpeg';


export default function Nightmatch() {

 
        // const [index, setIndex] = useState(0);
      
        // const handleSelect = (selectedIndex, e) => {
        //   setIndex(selectedIndex);
        // };

    return (
        <div className='whole'>
            <p>According to the most recent Calistus Memorial Trophy performances, the champions have a pattern of 10, 12, 14, and 16. With 18A's triumph, will the pattern hold, or can 17A break the odd-year curse and take home the Calistus Trophy since it has been over ten years since an odd-year batch has done so? </p>
        
        <Carousel className='carousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='carouselitem'>
            <div className='imgcontain'>
            <img
              className="imgset"
              src={nmatch1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain'>
            <img
              className="imgset"
              src={nmatch2}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          <Carousel.Item className='carouselitem'>
          <div className='imgcontain3'>
            <img
              className="imgset"
              src={nmatch3}
              alt="Second slide"
            />
             </div>
          </Carousel.Item>

          
        
        </Carousel>
        </div>
      );
    
}
