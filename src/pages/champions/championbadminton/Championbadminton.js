import React from 'react'
import './championbadminton.css';
import  BadmintonChamp from '../../../assets/champions/BadmintonChamp.jpeg';

export default function Championbadminton() {
  return (
    <div className='championbadmintoncontainer'>
        {/* <div className='championscheckoutcontainer'>
            <p className='championscheckouttext'>Check out our champs!</p>
        </div> */}
        <div className='championbadmintonimagecontainer'>
            <img className='championbadmintonimage' src={BadmintonChamp}></img>
        </div>
        <div className='championsbadmintontextcontainer'>
            <p className='championsbadmintontext'>Champions of the Badminton Championship</p>
        </div>
    </div>
  )
}
