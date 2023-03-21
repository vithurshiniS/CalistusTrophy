import React from 'react'
import './titlepage.css';
import introVideo from '../../assets/introVideo.mp4';

export default function TitlePage() {
  return (
  <div className='titlebackgroundimage'>
    <div className='titlepage'>
      <p className='titlesubname'>A decade down, forever to go!</p>

      <div className='titlenamecontainer'>
        {/* <div></div> */}
        <div className='titlename'>Calistus Trophy</div>

        <div className='titleline'></div>
      </div>
      
      <div className='titlevideocontainer'>
        <video className='titlevideo' src= {introVideo} autoPlay loop muted ></video>
      </div>
    
    </div>
    </div>
 
  )
}
