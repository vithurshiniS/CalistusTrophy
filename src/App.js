import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Mobileview from './pages/mobileview/Mobileview';
import { useState, useEffect } from 'react';
import Videotry from './components/Videotry';

// const isMobile = window.innerWidth <= 600;



function App() {
  const [WindowWidth, detectW] = useState({
    winWidth: window.innerWidth,
  })
  
  const detectSize=()=>{
    detectW({
    winWidth:window.innerWidth,
  })
  }
  useEffect(()=>{
    window.addEventListener('resize',detectSize)

    return()=>{
      window.removeEventListener('resize',detectSize)
    }
  },[WindowWidth])

  // const isMobile = WindowWidth.winWidth <= 600;

  if(WindowWidth.winWidth <= 600){
    return (
      <div className="Mobile_App">
        <Mobileview/>
      </div>
    );
  }else{
    return (
      <div className="App">
       
        <Banner/>
        {/* <Videotry/> */}
      </div>
    );
  }
 
}


export default App;


