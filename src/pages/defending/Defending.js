import React from 'react'
import './defending.css';
import defendingCaptain from '../../assets/defendingCaptain.jpeg'

export default function Defending() {
  return (
    <div className='defendingcontainer'>
        {/* <div data-aos = "fade"> */}
            <img className='defendingphoto' src={defendingCaptain}></img>
        {/* </div> */}
        
        <div className='defendingtextcontainer'>
            <p className='defendingtext'>The captain of the defending champion team, 16A, delivered the Calistus Memorial Trophy, which was the crowd's ultimate goal of the day.</p>
        </div>
    </div>
  )
}
