import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './navasir.css';
import navasir1 from '../../assets/navasir/navasir1.jpeg';
import navasir2 from '../../assets/navasir/navasir2.jpeg';
import navasir3 from '../../assets/navasir/navasir3.jpeg';
import navasir4 from '../../assets/navasir/navasir4.jpeg';


const images = [navasir1,navasir2,navasir3,navasir4]

export default function Navasir() {
  return (
    <div className='navasircontainer'> 
        <div className='navasirtextcontainer'>
            <p className='navasirtext'>The chief guest, <a href='https://eng.pdn.ac.lk/civil/people/drSKNavaratnarajah.php'>Dr S.K. Navaratnarajah</a>, a Senior Lecturer of the Department of Civil Engineering of the University of Peradeniya, officially kicked off the event under the lights as the night began to shine. </p>
        </div>
       
        <div className='navasirmasonry' > 
        <ResponsiveMasonry
                columnsCountBreakPoints={{100: 1, 200: 2}}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img 
                            key={i}
                            src={image}
                            style={{width: "100%"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        
       
    </div>
    
    
  )
}


