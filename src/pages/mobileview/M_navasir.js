import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import navasir1 from '../../assets/navasir/navasir1.jpeg';
import navasir2 from '../../assets/navasir/navasir2.jpeg';
import navasir3 from '../../assets/navasir/navasir3.jpeg';
import navasir4 from '../../assets/navasir/navasir4.jpeg';


const NavaSir = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "fade-up">
             
                <img src={navasir1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-up">
         
                <img src={navasir2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-up">
             
                <img src={navasir3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-up">
                
                <img src={navasir4}  className="intro-image" />
            </div>
            
        </div>
    );
};

export default NavaSir;