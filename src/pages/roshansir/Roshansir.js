import React, {useState, useEffect} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './roshansir.css';
import roshansir1 from '../../assets/roshansir/RoshanSir1.jpeg';
import roshansir2 from '../../assets/roshansir/RoshanSir2.jpeg';
// import roshansir3 from '../../assets/roshansir/RoshanSir3.jpeg';


const images = [roshansir1,roshansir2]

export default function Roshansir() {

    
    const [RoshansirWindowWidth, detectRoshansirW] = useState({
        RoshansirwinWidth: window.innerWidth,
      })
      
      const detectRSize=()=>{
        detectRoshansirW({
            RoshansirwinWidth:window.innerWidth,
      })
      }
      useEffect(()=>{
        window.addEventListener('resize',detectRSize)
    
        return()=>{
          window.removeEventListener('resize',detectRSize)
        }
      },[RoshansirWindowWidth])

      if(RoshansirWindowWidth.RoshansirwinWidth >= 601 & RoshansirWindowWidth.RoshansirwinWidth <= 1100){
        return (
            <div className='roshansircontainer'>
                <div className='roshansirtextcontainer'>
                    <p className='roshansirtext'>In the gathering, the chief guest, <a href='https://people.ce.pdn.ac.lk/staff/academic/roshan-ragel/'>Prof. Roshan G. Ragel</a>, the Head of Computer Engineering at the Faculty of Engineering, University of Peradeniya, expressed his satisfaction during the awards ceremony. </p>
                </div>
        
                <div className='roshansirmasonry' style={{paddingLeft:'130px',paddingRight:'130px', paddingTop:'20px'}}> 
                <ResponsiveMasonry
                        columnsCountBreakPoints={{100: 1}}
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
      else{
        return (
            <div className='roshansircontainer'>
                <div className='roshansirtextcontainer'>
                    <p className='roshansirtext'>In the gathering, the chief guest, <a href='https://people.ce.pdn.ac.lk/staff/academic/roshan-ragel/'>Prof. Roshan G. Ragel</a>, the Head of Computer Engineering at the Faculty of Engineering, University of Peradeniya, expressed his satisfaction during the awards ceremony. </p>
                </div>
        
                <div className='roshansirmasonry' style={{paddingLeft:'130px',paddingRight:'130px', paddingTop:'20px'}}> 
                <ResponsiveMasonry
                        columnsCountBreakPoints={{100: 1, 200: 2}}
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


}


