import React from 'react'
import './history.css';
import Teams from '../../assets/4teams.jpeg'

export default function History() {
  return (
    <div className='historycontainer'>
        <div className='teamsphotocontainer'>
            <img className='teamsphoto' src={Teams}></img>
        </div>
        
        <div className='historytextcontainer'>
            <p className='historytext'>The 21st of January 2023 marked the arrival of the grand finale, and all four of the A teams from the four batches have advanced to the playoffs.</p>
        </div>
    </div>
  )
}
