import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import q11 from '../../assets/qualifier1/q11.jpeg';
import q12 from '../../assets/qualifier1/q12.jpeg';
import q13 from '../../assets/qualifier1/q13.jpeg';



const MQualifier1 = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            {/* <h3>Qualifier 1 between 17A and 18A</h3> */}
            
            {/* <div className='teamnamebox'>
                    <p className='teamname'>Qualifier 1 between 17A and 18A</p>
                </div> */}
            <div className="boxes" data-aos = "fade">
            <div className='playoff'>
                    <p className='teamname'>Qualifier 1 between 17A and 18A</p>
                </div>
                <img src={q11}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={q12}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
               
                <img src={q13}  className="intro-image" />
            </div>
            
            
        </div>
    );
};

export default MQualifier1;