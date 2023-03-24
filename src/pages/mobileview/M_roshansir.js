import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import roshansir1 from '../../assets/roshansir/RoshanSir1.jpeg';
import roshansir2 from '../../assets/roshansir/RoshanSir2.jpeg';
import roshansir3 from '../../assets/roshansir/RoshanSir3.jpeg';



const MRoshanSir = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
    
            <div className="boxes" data-aos = "fade">
           
                <img src={roshansir1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={roshansir2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
               
                <img src={roshansir3}  className="intro-image" />
            </div>
            
            
        </div>
    );
};

export default MRoshanSir;