import React from 'react'
import './championcricket.css';
import  Calistuschamp from '../../../assets/champions/CalistusChamp.jpeg';

export default function Championcricket() {
  return (
    <div className='championcricketcontainer'>
        {/* <div className='championscheckoutcontainer'>
            <p className='championscheckouttext'>Check out our champs!</p>
        </div> */}
        <div className='championcricketimagecontainer'>
            <img className='championcricketimage' src={Calistuschamp}></img>
        </div>
        <div className='championscrickettextcontainer'>
            <p className='championscrickettext'>Champions of the Calistus Memorial Cricket Trophy</p>
        </div>
    </div>
  )
}
