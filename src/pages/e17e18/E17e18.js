import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './e17e18.css';
import ft1 from '../../assets/e17e18/ft1.jpeg';
import ft2 from '../../assets/e17e18/ft2.jpeg';



const images = [ft1,ft2]

export default function E17e18() {
  return (
    <div className='e17e18container'> 
    <div className='e1718textcontainer'>
        <p className='e1718text'>
        As the night went on, the match between the teams continued to be exciting, and the teams 17A and 18A were able to proceed to the final battle. 
        </p>
    </div>
        {/* <div className='e17e18textcontainer'>
            <p className='e17e18matchtext'>As the night went on, the match between the teams continued to be exciting, and the teams 17A and 18A were able to proceed to the final battle. 
</p>
        </div>
        */}
        <div className='e1718imagescontainer' > 
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


