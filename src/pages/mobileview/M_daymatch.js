import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dmatch1 from '../../assets/daymatch/dmatch1.jpeg';
import dmatch2 from '../../assets/daymatch/dmatch2.jpeg';
import dmatch3 from '../../assets/daymatch/dmatch3.jpeg';
import dmatch4 from '../../assets/daymatch/dmatch4.jpeg';



const MDayMatch = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
   
            <div className="boxes" data-aos = "fade">
           
                <img src={dmatch1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={dmatch2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
               
                <img src={dmatch3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
               
               <img src={dmatch4}  className="intro-image" />
           </div>
           
            
        </div>
    );
};

export default MDayMatch;