import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import TitlePage from '../pages/titlepage/TitlePage';
import CalistusIntroPage from '../pages/calistusintropage/CalistusIntroPage';
import Playoffmatch from '../pages/playoffmatch/Playoffmatch';

export default function Banner() {
  return (
   <Carousel variant="dark" indicators= {false}>
      <Carousel.Item>
        <TitlePage/>
      </Carousel.Item>

      <Carousel.Item>
        <CalistusIntroPage/>
      </Carousel.Item>

      <Carousel.Item>
        <Playoffmatch/>
      </Carousel.Item>
     
    </Carousel>
    
  )
}
