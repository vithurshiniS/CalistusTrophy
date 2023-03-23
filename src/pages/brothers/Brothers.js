import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './brothers.css';
import sports1 from '../../assets/brothers/sports1.jpeg';
import sports2 from '../../assets/brothers/sports2.jpeg';



const images = [sports1,sports2]

export default function Brothers() {
  return (
    <div className='brotherscontainer'> 
        <div className='brotherstextcontainer'>
            <p className='brothersmatchtext'>Whatever the outcome, they came together once more as brothers because good sportsmanship should never be compromised.
</p>
        </div>
       
        <div className='brothersimagescontainer' > 
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


