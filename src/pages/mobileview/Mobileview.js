import React from 'react'
import TitlePage from '../titlepage/TitlePage'
import CalistusBrother from '../../assets/CalistusBrotherPhoto.jpeg';
import IntroText from './Introtext';
import MBeforematch from './M_beforematch';
import Fourteams from '../../assets/4teams.jpeg';
import MPlayoffTeams from './M_playoffmatch';
import MMatchbefore from './M_matchbefore';
import CalistusCoin from '../../assets/calistuscoin/calistusCoin.png';
import CoinHandOver from '../../assets/calistuscoin/CoinHandOver.jpeg';
import DefendingCap from '../../assets/defendingCaptain.jpeg';
import GroundView from '../../assets/ground.jpg';
import NavaSir from './M_navasir';
import MQualifier1 from './M_qualifier1';
import MEliminator from './M_eliminator';
import MQualifier2 from './M_qualifier2';
import ME17e18 from './M_e1718';
import MNightMatch from './M_nightmatch';
import MDayMatch from './M_daymatch';
import Thrill from '../../assets/thrill.jpeg';
import MDisappointments from './M_disappointments';
import MVictory from './MVictory';
import MBrothers from './M_brothers';
import Selfie from '../../assets/selfie.jpeg';
import MRoshanSir from './M_roshansir';
import MHighlights from './M_highlights';
import MFootball from './M_football';
import MVolleyball from './M_volleyball';
import MBadminton from './M_badminton';
import GroupE16 from '../../assets/GroupE16.jpeg';
import  PaavoAnna from '../../assets/PaavoAnna.jpeg';
import GroupEfacimg from '../../assets/GroupEfac.jpeg';
import MChampions from './M_champions';
import Groupefac from '../groupefac/Groupefac';
import MGroupefac from './M_groupefac';

export default function Mobileview() {
  return (
    <div>
      <TitlePage/>
      <IntroText text="The Tamil Engineering Undergraduates of the University of Peradeniya honour the Calistus Memorial Cricket Trophy, which happens under lights each year in memory of Mr Anton Yogaraja Calistus Kajendran from batch E07, who passed away in 2010 during his university life. It is a great success that this time, after a hiatus and many challenges, the Calistus Trophy is commemorating its tenth year."/>
      <img src={CalistusBrother}  className="intro-image" />
      <IntroText text = "The tournament began on 7th of December, 2022, with two teams from each of the four batches (E16, E17, E18, and E19), and the teams that would face off in the final battle were chosen following the B-League and Super Six League matches."/>
      {/* <MBeforematch/> */}
      <MMatchbefore/> 
      <IntroText text ="The 21st of January 2023 marked the arrival of the grand finale, and all four of the A teams from the four batches have advanced to the playoffs."/>
      <img src={Fourteams}  className="intro-image"/>
      <MPlayoffTeams/>
      <IntroText text="Furthermore, the Calistus Memorial Coin, which features our beloved brother’s face on it, was launched on this day to celebrate the tenth anniversary and handed to the special guests, Mr Calistus’ parents."/>
      <img src={CalistusCoin}  className="intro-image" />
      <img src={CoinHandOver}  className="intro-image" /> 
      <IntroText text="The captain of the defending champion team, 16A, delivered the Calistus Memorial Trophy, which was the crowd's ultimate goal of the day."/>
      <div className="boxes" data-aos = "fade">
             <img src={DefendingCap}  className="intro-image" />
        </div>
      {/* <img src={DefendingCap}  className="intro-image" /> */}
      <IntroText text="Now look at the way the battlefield is lit and ready to rewrite history."/>
      <div className="boxes" data-aos = "zoom-in">
             <img src={GroundView}  className="intro-image" />
      </div>
      <IntroText  text="The chief guest, "
      link='https://eng.pdn.ac.lk/civil/people/drSKNavaratnarajah.php'
      linkname="Dr S.K. Navaratnarajah"
      text2=", a Senior Lecturer of the Department of Civil Engineering of the University of Peradeniya, officially kicked off the event under the lights as the night began to shine. "/>
      <NavaSir/>
      <IntroText text="It's time for the playoffs!"/>
      <MQualifier1/>
      <MEliminator/>
      <MQualifier2/>
      <IntroText text="As the night went on, the match between the teams continued to be exciting, and the teams 17A and 18A were able to proceed to the final battle. "/>
      <ME17e18/>
      <IntroText text="According to the most recent Calistus Memorial Trophy performances, the champions have a pattern of 10, 12, 14, and 16. With 18A's triumph, will the pattern hold, or can 17A break the odd-year curse and take home the Calistus Trophy since it has been over ten years since an odd-year batch has done so? "/>
      <MNightMatch/>
      <IntroText text="The dawn has arrived, but the game went on. "/>
      <MDayMatch/>
      <IntroText text="Everyone around them became more and more thrilled about the outcome as time passed."/>
      <div className="boxes" data-aos = "fade">
        <img src={Thrill}  className="intro-image"/>
      </div>
      <IntroText text="The match had some disappointments as well."/>
      <MDisappointments/>
      <IntroText text="And finally, cheers to the trend continuing! The 18A team won and proclaimed themselves the 10th Calistus Trophy champions. The crew ultimately succeeded, and they were extremely thrilled with their accomplishment and celebrated their happiness."/>
      <MVictory/>
      <IntroText text="Whatever the outcome, they came together once more as brothers because good sportsmanship should never be compromised."/>
      <MBrothers/>
      <IntroText text="Lacked only one thing. How about a champion selfie with the victory? "/>
      <div className="boxes" data-aos = "zoom-in">
          <img src={Selfie}  className="intro-image" />
      </div>
      <IntroText text="In the gathering, the chief guest, "
      link='https://people.ce.pdn.ac.lk/staff/academic/roshan-ragel/'
      linkname="Prof. Roshan G. Ragel"
      text2=", the Head of Computer Engineering at the Faculty of Engineering, University of Peradeniya, expressed his satisfaction during the awards ceremony."/>
      <MRoshanSir/>
      <div style={{backgroundColor:'crimson', marginLeft:'10px', marginRight:'10px'}}>
      <IntroText text="A glance at some of the event's highlights"/>
      </div>
      
      <MHighlights/>
      <IntroText text="The Clash of Brotherhood Football Championship took place this year and was similarly passionate. The match was won by Team E16, which also demonstrated a range of drive and commitment. "/>
    <MFootball/>
    <IntroText text="The Sujeevan Memorial Volleyball Tournament, which was held this year as well, was extremely satisfying, and team 18A emerged victorious and declared themselves the winners."/>
    <MVolleyball/>
    <IntroText text="This year, the first-ever badminton championship was staged to encourage girls to participate in sports and advance their abilities. The E18 squad, who created history by becoming the first champions, displayed a range of emotions during the tournament."/>
    <MBadminton/>
    {/* <p className='champcheck'>Check out our champs! </p> */}
    <IntroText text="Check out our champs!"/>
    <MChampions/>
    <IntroText text="Under the motto 'ItzE16'sEndGame,' E16 worked tirelessly to make these events a huge success."/>
    <div className="boxes" data-aos = "fade">
             <img src={GroupE16}  className="intro-image" />
         </div>
    <IntroText text="In addition, the committee charged the succeeding batch, E17, with continuing where it left off and moving up the levels."/>
    <div className="boxes" data-aos = "fade">
             <img src={PaavoAnna}  className="intro-image" />
         </div>
    
    {/* <div className="boxes" data-aos = "zoom-in">
             <img src={GroupEfacimg}  className="intro-image" />
         </div> */}
         {/* <IntroText text="“Where there is unity, there is always victory.” This will not stop here. To reach the upper levels, the entire squad will put forth their best effort."/> */}
    {/* <div className="finalbox">
<p className='finaltext'>“Where there is unity, there is always victory.” This will not stop here. To reach the upper levels, the entire squad will put forth their best effort.</p>
    </div> */}
    {/* <Groupefac/> */}
    <MGroupefac/>
   
   
   
    </div>
  )
}
