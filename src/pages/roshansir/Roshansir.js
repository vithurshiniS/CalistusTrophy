import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './roshansir.css';
import roshansir1 from '../../assets/roshansir/RoshanSir1.jpeg';
import roshansir2 from '../../assets/roshansir/RoshanSir2.jpeg';
import roshansir3 from '../../assets/roshansir/RoshanSir3.jpeg';


const images = [roshansir1,roshansir2,roshansir3]

export default function Roshansir() {
  return (
    <div>
        <div className='playoffmatchtextcontainer'>
            <p className='playoffmatchtext'>In the gathering, the chief guest, Prof. Roshan G. Ragel, the Head of Computer Engineering at the Faculty of Engineering, University of Peradeniya, expressed his satisfaction during the awards ceremony. </p>
        </div>
        <div className='check' style={{paddingLeft:'130px',paddingRight:'130px', paddingTop:'20px'}}> 
        <ResponsiveMasonry
                columnsCountBreakPoints={{100: 1, 200: 2, 300:3}}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img 
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
       
    </div>
    
    
  )
}


