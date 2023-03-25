import React, {useState, useEffect} from 'react'
import './coin.css';
import Coinimage from '../../assets/calistuscoin/calistusCoin.png';
import Handovercoin from '../../assets/calistuscoin/CoinHandOver.jpeg';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [Coinimage,Handovercoin]

export default function Coin() {

    const [CoinWindowWidth, detectCoinW] = useState({
        coinwinWidth: window.innerWidth,
      })
      
      const detectCoinSize=()=>{
        detectCoinW({
        coinwinWidth:window.innerWidth,
      })
      }
      useEffect(()=>{
        window.addEventListener('resize',detectCoinSize)
    
        return()=>{
          window.removeEventListener('resize',detectCoinSize)
        }
      },[CoinWindowWidth])

      if(CoinWindowWidth.coinwinWidth >= 601 & CoinWindowWidth.coinwinWidth <= 1000){
        return (
            <div className='coincontainer'>
                
                <div className='cointextcontainer'>
                    <p className='coinmatchtext'>Furthermore, the Calistus Memorial Coin, which features our beloved brother&#39;s face on it, was launched on this day to celebrate the tenth anniversary and handed to the special guests, Mr Calistus&#39; parents. </p>
                </div>
                <div className='check' style={{paddingLeft:'130px',paddingRight:'130px', paddingTop:'20px'}}> 
                <ResponsiveMasonry
                        columnsCountBreakPoints={{100: 1}}
                    >
                        <Masonry gutter='20px' style={{height:''}}>
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
            <div className='coincontainer'>
                
                <div className='cointextcontainer'>
                    <p className='coinmatchtext'>Furthermore, the Calistus Memorial Coin, which features our beloved brother&#39;s face on it, was launched on this day to celebrate the tenth anniversary and handed to the special guests, Mr Calistus&#39; parents. </p>
                </div>
                <div className='check' style={{paddingLeft:'130px',paddingRight:'130px', paddingTop:'20px'}}> 
                <ResponsiveMasonry
                        columnsCountBreakPoints={{100: 1, 200: 2}}
                    >
                        <Masonry gutter='20px' style={{height:''}}>
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
      

  return (
    <div className='coincontainer'>
        
        <div className='cointextcontainer'>
            <p className='coinmatchtext'>Furthermore, the Calistus Memorial Coin, which features our beloved brother&#39;s face on it, was launched on this day to celebrate the tenth anniversary and handed to the special guests, Mr Calistus&#39; parents. </p>
        </div>
        <div className='check' style={{paddingLeft:'130px',paddingRight:'130px', paddingTop:'20px'}}> 
        <ResponsiveMasonry
                columnsCountBreakPoints={{100: 1, 200: 2}}
            >
                <Masonry gutter='20px' style={{height:''}}>
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
