import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './disappointments.css';
import dis1 from '../../assets/disappointments/dis1.jpeg';
import dis2 from '../../assets/disappointments/dis2.jpeg';



const images = [dis1,dis2]

export default function Disappointments() {
  return (
    <div className='disappointmentcontainer'> 
        <div className='disappointmenttextcontainer'>
            <p className='disappointmentmatchtext'>The match had some disappointments as well.</p>
        </div>
       
        <div className='disappointmentimagescontainer' > 
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


