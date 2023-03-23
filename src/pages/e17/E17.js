import React from 'react'
import './e17.css';
import PaavoAnna from '../../assets/PaavoAnna.jpeg'

export default function E17() {
  return (
    <div className='e17container'>
        {/* <div data-aos = "fade"> */}
            <img className='e17photo' src={PaavoAnna}></img>
        {/* </div> */}
        
        <div className='e17textcontainer'>
            <p className='e17text'>In addition, the committee charged the succeeding batch, E17, with continuing where it left off and moving up the levels.</p>
        </div>
    </div>
  )
}
