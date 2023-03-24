import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team16A from '../../assets/finalteams/team16a.jpeg';
import Team17A from '../../assets/finalteams/team17a.jpeg';
import Team18A from '../../assets/finalteams/team18a.jpeg';
import Team19A from '../../assets/finalteams/team19a.jpeg';


const MPlayoffTeams = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="playoffboxes" data-aos = "fade">
                {/* <h3>Team 16A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 16A</p>
                </div>
                <img src={Team16A}  className="intro-image" style={{marginBottom:'10px'}}/>
            </div>
            <div className="playoffboxes" data-aos = "fade">
                {/* <h3>Team 17A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 17A</p>
                </div>
                <img src={Team17A}  className="intro-image" style={{marginBottom:'10px'}}/>
            </div>
            <div className="playoffboxes" data-aos = "fade">
                {/* <h3>Team 18A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 18A</p>
                </div>
                <img src={Team18A}  className="intro-image" style={{marginBottom:'10px'}}/>
            </div>
            <div className="playoffboxes" data-aos = "fade">
                {/* <h3>Team 19A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 19A</p>
                </div>
                <img src={Team19A}  className="intro-image" style={{marginBottom:'10px'}}/>
            </div>
            
        </div>
    );
};

export default MPlayoffTeams;