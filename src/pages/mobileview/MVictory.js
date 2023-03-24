import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import victory1 from '../../assets/victory/victory1.jpeg';
import victory2 from '../../assets/victory/victory2.jpeg';
import victory3 from '../../assets/victory/victory3.jpeg';
import victory4 from '../../assets/victory/victory4.jpeg';
import victory5 from '../../assets/victory/victory5.jpeg';
import victory6 from '../../assets/victory/victory6.jpeg';
import victory7 from '../../assets/victory/victory7.jpeg';




const MVictory = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
   
            <div className="boxes" data-aos = "zoom-in">
           
                <img src={victory1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
             
                <img src={victory2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
               
                <img src={victory3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
             
             <img src={victory4}  className="intro-image" />
         </div>
         <div className="boxes" data-aos = "zoom-in">
            
             <img src={victory5}  className="intro-image" />
         </div>
         <div className="boxes" data-aos = "zoom-in">
             
             <img src={victory6}  className="intro-image" />
         </div>
         <div className="boxes" data-aos = "zoom-in">
            
             <img src={victory7}  className="intro-image" />
         </div>
            
            
        </div>
    );
};

export default MVictory;