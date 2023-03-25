import React from 'react'
import './calistusintropage.css';
import CalistusBrother from '../../assets/CalistusBrotherPhoto.jpeg';

export default function LandingPage() {
  return (
    // <div className='calistusimagecontainer'>
    <div className='introcontainer'>
      
      <div className='calistusimagecontainer'>
      <img className='calistusimage' src={CalistusBrother}/>
      </div>
      <div className='textcontainer'>
        <p className='introtext'>The Tamil Engineering Undergraduates of the University of Peradeniya honour the Calistus Memorial Cricket Trophy, which happens under lights each year in memory of Mr Anton Yogaraja Calistus Kajendran from batch E07, who passed away in 2010 during his university life. It is a great success that this time, after a hiatus and many challenges, the Calistus Trophy is commemorating its tenth year.</p>
      </div>
     </div> 
    //  </div>
    
  )
}
