import React from 'react'
import './championfootball.css';
import  CBFCChamp from '../../../assets/champions/CBFCChamp.jpeg';

export default function Championfootball() {
  return (
    <div className='championcricketcontainer'>
        {/* <div className='championscheckoutcontainer'>
            <p className='championscheckouttext'>Check out our champs!</p>
        </div> */}
        <div className='championfootballimagecontainer'>
            <img className='championfootballimage' src={CBFCChamp}></img>
        </div>
        <div className='championsfootballtextcontainer'>
            <p className='championsfootballtext'>Champions of the Clash of Brotherhood Football Championship</p>
        </div>
    </div>
  )
}
