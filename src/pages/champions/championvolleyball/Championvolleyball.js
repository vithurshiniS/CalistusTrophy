import React from 'react'
import './championvolleyball.css';
import  SujeevanChamp from '../../../assets/champions/SujeevanChamp.jpeg';

export default function Championvolleyball() {
  return (
    <div className='championvolleyballcontainer'>
        {/* <div className='championscheckoutcontainer'>
            <p className='championscheckouttext'>Check out our champs!</p>
        </div> */}
        <div className='championvolleyballimagecontainer'>
            <img className='championvolleyballimage' src={SujeevanChamp}></img>
        </div>
        <div className='championsvolleyballtextcontainer'>
            <p className='championsvolleyballtext'>Champions of the Sujeevan Memorial Volleyball Tournament</p>
        </div>
    </div>
  )
}
