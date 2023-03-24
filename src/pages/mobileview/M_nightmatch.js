import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nmatch1 from '../../assets/nightmatch/nmatch1.jpeg';
import nmatch2 from '../../assets/nightmatch/nmatch2.jpeg';
import nmatch3 from '../../assets/nightmatch/nmatch3.jpeg';



const MNightMatch = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
         
            <div className="boxes" data-aos = "fade">
           
                <img src={nmatch1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={nmatch2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
               
                <img src={nmatch3}  className="intro-image" />
            </div>
            
            
        </div>
    );
};

export default MNightMatch;
