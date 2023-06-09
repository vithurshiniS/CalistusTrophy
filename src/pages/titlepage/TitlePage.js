import React, { useEffect, useRef, Component } from 'react'
import './titlepage.css';
import introVideo from '../../assets/introVideo.mp4';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import thumb from '../../assets/thumbnail.jpeg';

export default function TitlePage() {

 

  return (
  <div className='titlebackgroundimage'>
    <div className='titlepage'>
      <p className='titlesubname'>A decade down, forever to go!</p>

      <div className='titlenamecontainer'>
        
        <div className='titlerowcontainer'>

          <div className='titlename'>Calistus Trophy</div>
          <div className='titleline'></div>
        </div>

        

        
      </div>
      <div className='photostory'>...because every picture tells a story...</div>
      
      <div className='titlevideocontainer'>
      <Video poster={thumb} autoPlay >
        <source className='titlevideo' src={introVideo} type="video/webm"/>
      </Video>
        {/* <video className='titlevideo' src= {introVideo} autoPlay loop muted ></video> */}
      </div>
    
    </div>
    </div>
 
  )
}
