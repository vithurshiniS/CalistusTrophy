import React from 'react'
import './finalteams.css';
import Team16 from '../../assets/finalteams/team16a.jpeg';
import Team17 from '../../assets/finalteams/team17a.jpeg';
import Team18 from '../../assets/finalteams/team18a.jpeg';
import Team19 from '../../assets/finalteams/team19a.jpeg';

export default function Finalteams
() {
  return (
    // <div className='teambackground'>

   
<div class="grid-container">

  <div class="grid-item">
  <div className='finalteamphotocontainer'>
    <img className='finalteamphoto' src={Team16}></img>
    </div>
    <div className='finalteamtextcontainer'>
        <p className='finalteamtext' >Team 16A</p>
    </div>
  </div>

  <div class="grid-item">
  <div className='finalteamphotocontainer'>
    <img className='finalteamphoto' src={Team17}></img>
    </div>
    <div className='finalteamtextcontainer'>
        <p className='finalteamtext' >Team 17A</p>
    </div>
  </div>

  <div class="grid-item">
  <div className='finalteamphotocontainer'>
    <img className='finalteamphoto' src={Team18}></img>
    </div>
    <div className='finalteamtextcontainer'>
        <p className='finalteamtext' >Team 18A</p>
    </div>
  </div>

  <div class="grid-item">
    <div className='finalteamphotocontainer'>
        <img className='finalteamphoto' src={Team19}></img>
    </div>

    <div className='finalteamtextcontainer'>
        <p className='finalteamtext' >Team 19A</p>
    </div>
  </div>

</div>
// </div>
  )
}
