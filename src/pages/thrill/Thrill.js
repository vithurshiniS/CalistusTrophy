import React from 'react'
import './thrill.css';
import thrill from '../../assets/thrill.jpeg'

export default function Thrill() {
  return (
    <div className='thrillcontainer'>
        <div className='thrillimagecontainer'>
            <img className='thrillphoto' src={thrill}></img>
        </div>
        
        <div className='thrilltextcontainer'>
            <p className='thrilltext'>Everyone around them became more and more thrilled about the outcome as time passed.</p>
        </div>
    </div>
  )
}
