import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import q21 from '../../assets/qualifier2/q21.jpg';
import q22 from '../../assets/qualifier2/q22.jpg';
import q23 from '../../assets/qualifier2/q23.jpg';



const MQualifier2 = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            {/* <h3>Qualifier 2 between 16A and 17A</h3> */}
            
            <div className="separateboxes" data-aos = "fade">
            <div className='playoff'>
                    <p className='teamname'>Qualifier 2 between 16A and 17A</p>
                </div>
                <img src={q21}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
    
                <img src={q22}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
                <img src={q23}  className="intro-image" />
            </div>
         
            
        </div>
    );
};

export default MQualifier2;