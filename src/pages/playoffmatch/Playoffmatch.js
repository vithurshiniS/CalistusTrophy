import React from 'react'
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './playoffmatch.css';
import Carousel from 'react-bootstrap/Carousel';
import BM1 from '../../assets/beforematch/BM1.jpeg';
import BM2 from '../../assets/beforematch/BM2.jpeg';
import BM3 from '../../assets/beforematch/BM3.jpeg';
import BM4 from '../../assets/beforematch/BM4.jpeg';
import BM5 from '../../assets/beforematch/BM5.jpeg';
import BM6 from '../../assets/beforematch/BM6.jpeg';
import BM7 from '../../assets/beforematch/BM7.jpeg';
import BM8 from '../../assets/beforematch/BM8.jpeg';
import BM9 from '../../assets/beforematch/BM9.jpeg';
import BM10 from '../../assets/beforematch/BM10.jpeg';
import BM11 from '../../assets/beforematch/BM11.jpeg';
import BM12 from '../../assets/beforematch/BM12.jpeg';


// const images = [BM1,BM2,BM3,BM4,BM5,BM6,BM7,BM9,BM8,BM10,BM11,BM12]

export default function Playoffmatch() {
    return (
        <div className='playoffcontainer'>

            <p>The tournament began on 7th of December, 2022, with two teams from each of the four batches (E16, E17, E18, and E19), and the teams that would face off in the final battle were chosen following the B-League and Super Six League matches.</p>
        
        <Carousel className='playoffcarousel' fade slide={false} interval={1000} controls={false} indicators={false}>
          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM1}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM2}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM3}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM4}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer_height'>
            <img
              className="playoffimage"
              src={BM5}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM6}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer_height'>
            <img
              className="playoffimage"
              src={BM7}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer_height'>
            <img
              className="playoffimage"
              src={BM8}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM9}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM10}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM11}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          <Carousel.Item className='playoffcarouselitem'>
            <div className='playoffimagecontainer'>
            <img
              className="playoffimage"
              src={BM12}
              alt="First slide"
            />
            </div>
          </Carousel.Item>

          
        
        </Carousel>
        </div>
      );
    
}