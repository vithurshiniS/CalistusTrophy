import React from 'react'
import './ground.css';
import ground from '../../assets/ground.jpg'

export default function Ground() {
  return (
    <div className='groundcontainer'>
        {/* <div data-aos = "fade"> */}
            
        {/* </div> */}
        
        <div className='groundtextcontainer'>
            <p className='groundtext'>Now look at the way the battlefield is lit and ready to rewrite history.</p>
        </div>
        <img className='groundphoto' src={ground}></img>
    </div>
  )
}
