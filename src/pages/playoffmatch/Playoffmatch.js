import React from 'react'
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import BM1 from '../../assets/beforematch/BM1.jpeg';
import BM2 from '../../assets/beforematch/BM2.jpeg';
import BM3 from '../../assets/beforematch/BM3.jpeg';
import BM4 from '../../assets/beforematch/BM4.jpeg';
import BM5 from '../../assets/beforematch/BM5.jpeg';
import BM6 from '../../assets/beforematch/BM6.jpeg';

const images = [BM1,BM2,BM3,BM4,BM5,BM6]

export default function Playoffmatch() {
  return (
    <div>
        <div>Playoffmatch</div>

        {/* <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry> */}
    </div>
    
    
  )
}


