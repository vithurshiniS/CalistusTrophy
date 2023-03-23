import React from 'react'
import './e16.css';
import GroupE16 from '../../assets/GroupE16.jpeg'

export default function E16() {
  return (
    <div className='e16container'>
        {/* <div data-aos = "fade"> */}
            <img className='e16photo' src={GroupE16}></img>
        {/* </div> */}
        
        <div className='e16textcontainer'>
            <p className='e16text'>Under the motto "ItzE16'sEndGame," E16 worked tirelessly to make these events a huge success.</p>
        </div>
    </div>
  )
}
