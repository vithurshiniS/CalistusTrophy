import React from 'react'
import './mgroupefac.css';
import GroupEfac from '../../assets/GroupEfac2.jpeg';

export default function MGroupefac() {
  return (
    <div>
        <div className='groupefacimage1'>
          <div className='groupefacimagecontainer'>
            <img src={GroupEfac} className='groupefacimage'></img>
          </div>
            
            <div className='groupefactextcontainer'>
            <p className='groupefactext'>“Where there is unity, there is always victory.” This will not stop here. To reach the upper levels, the entire squad will put forth their best effort.</p>
        </div>
        </div>
       
    </div>
  )
}
