import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import TitlePage from '../pages/titlepage/TitlePage';
import CalistusIntroPage from '../pages/calistusintropage/CalistusIntroPage';
import Playoffmatch from '../pages/playoffmatch/Playoffmatch';
import History from '../pages/history/History';
import Finalteams from '../pages/finalteams/Finalteams';
import Coin from '../pages/coin/Coin';
// import Deck from '../components/Deck';
import Badminton from '../pages/badminton/Badminton';
import Volleyball from '../pages/volleyball/Volleyball';
import Football from '../pages/football/Football';
import Championcricket from '../pages/champions/championcricket/Championcricket';
import Championbadminton from '../pages/champions/championbadminton/Championbadminton';
import Championvolleyball from '../pages/champions/championvolleyball/Championvolleyball';
import Championfootball from '../pages/champions/championfootball/Championfootball';
import E16 from '../pages/e16/E16';
import E17 from '../pages/e17/E17';
import Groupefac from '../pages/groupefac/Groupefac';
import Defending from '../pages/defending/Defending';
import Selfie from '../pages/selfie/Selfie';
import Thrill from '../pages/thrill/Thrill';
import Ground from '../pages/ground/Ground';
import Roshansir from '../pages/roshansir/Roshansir';
import Navasir from '../pages/navasir/Navasir';
import Victory from '../pages/victory/Victory';
import Highlights from '../pages/highlights/Highlights';
import E17e18 from '../pages/e17e18/E17e18';
import Disappointments from '../pages/disappointments/Disappointments';
import Brothers from '../pages/brothers/Brothers';
import Nightmatch from '../pages/nightmatch/Nightmatch';
import Daymatch from '../pages/daymatch/Daymatch';
import Qualifier1 from '../pages/qualifier1/Qualifier1';
import Qualifier2 from '../pages/qualifier2/Qualifier2';
import Eliminator from '../pages/eliminator/Eliminator';


export default function Banner() {
  // const linearGradient = 'linear-gradient(to right, #7b4397, #dc2430)';
  // const style = { background: linearGradient };

  return (
   <Carousel slide={false} indicators= {false} style={{margin: 0,backgroundColor:'black'}}>
      <Carousel.Item>
        <TitlePage/>
      </Carousel.Item>

      <Carousel.Item>
        <CalistusIntroPage/>
      </Carousel.Item>

      <Carousel.Item>
        <CalistusIntroPage/>
      </Carousel.Item>

      <Carousel.Item style={{backgroundColor:'black'}}>
        <Playoffmatch/>
      </Carousel.Item>

      <Carousel.Item>
        <History/>
      </Carousel.Item>

      <Carousel.Item>
        <Finalteams/>
      </Carousel.Item>

      <Carousel.Item>
        <Coin/>
      </Carousel.Item>

      <Carousel.Item>
        <Defending/>
      </Carousel.Item>

      <Carousel.Item>
        <Ground/>
      </Carousel.Item>

      <Carousel.Item>
        <Navasir/>
      </Carousel.Item>

      <Carousel.Item>
        <Qualifier1/>
      </Carousel.Item>

      <Carousel.Item>
        <Eliminator/>
      </Carousel.Item>

      <Carousel.Item>
        <Qualifier2/>
      </Carousel.Item>

      <Carousel.Item>
        <E17e18/>
      </Carousel.Item>

      <Carousel.Item>
        <Nightmatch/>
      </Carousel.Item>

      <Carousel.Item>
        <Daymatch/>
      </Carousel.Item>

      <Carousel.Item>
        <Thrill/>
      </Carousel.Item>

      <Carousel.Item>
        <Disappointments/>
      </Carousel.Item>

      <Carousel.Item>
        <Victory/>
      </Carousel.Item>

      <Carousel.Item>
        <Brothers/>
      </Carousel.Item>

      <Carousel.Item>
        <Selfie/>
      </Carousel.Item>

      <Carousel.Item>
        <Roshansir/>
      </Carousel.Item>

      <Carousel.Item>
        <Highlights/>
      </Carousel.Item>

      <Carousel.Item>
        <Football/>
      </Carousel.Item>

      <Carousel.Item>
        <Volleyball/>
      </Carousel.Item>

      <Carousel.Item>
        <Badminton/>
      </Carousel.Item>

      <Carousel.Item>
        <Championcricket/>
      </Carousel.Item>

      <Carousel.Item>
        <Championfootball/>
      </Carousel.Item>

      <Carousel.Item>
        <Championvolleyball/>
      </Carousel.Item>

      <Carousel.Item>
        <Championbadminton/>
      </Carousel.Item>

      <Carousel.Item>
        <E16/>
      </Carousel.Item>

      <Carousel.Item>
        <E17/>
      </Carousel.Item>

      <Carousel.Item>
        <Groupefac/>
      </Carousel.Item>
     
    </Carousel>
    
  )
}
