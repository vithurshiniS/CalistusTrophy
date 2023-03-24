import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import highlights1 from '../../assets/highlights/Highlights1.jpg';
import highlights2 from '../../assets/highlights/Highlights2.jpeg';
import highlights3 from '../../assets/highlights/Highlights3.jpeg';
import highlights4 from '../../assets/highlights/Highlights4.jpeg';
// import highlights5 from '../../assets/highlights/Highlights5.jpeg';
import highlights6 from '../../assets/highlights/Highlights6.jpeg';
import highlights7 from '../../assets/highlights/Highlights7.jpeg';
import highlights8 from '../../assets/highlights/Highlights8.jpg';
import highlights9 from '../../assets/highlights/Highlights9.jpeg';
import highlights10 from '../../assets/highlights/Highlights10.jpeg';
import highlights11 from '../../assets/highlights/Highlights11.jpeg';
import highlights12 from '../../assets/highlights/Highlights12.jpeg';
import highlights13 from '../../assets/highlights/Highlights13.jpeg';




const MHighlights = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights4}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights6}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights7}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights8}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights9}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights10}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights11}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights12}  className="intro-image" />
            </div>
          
            <div className="boxes" data-aos = "zoom-in">
                <img src={highlights13}  className="intro-image" />
            </div>
           
            
            
        </div>
    );
};

export default MHighlights;