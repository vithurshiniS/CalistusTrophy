import React from 'react'
import './selfie.css';
import champSelfie from '../../assets/selfie.jpeg'

export default function Selfie() {
  return (
    <div className='selfiecontainer'>
        <div className='selfiephotocontainer'>
            <img className='selfiephoto' src={champSelfie}></img>
        </div>
        
        <div className='selfietextcontainer'>
            <p className='selfietext'>Lacked only one thing. How about a champion selfie with the victory? </p>
        </div>
    </div>
  )
}
