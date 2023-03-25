// import "node_modules/video-react/dist/video-react.css"; 
import React from 'react';
import { Player } from 'video-react';
import vid from '../assets/introVideo.mp4';
import img from '../assets/selfie.jpeg';

export default Videotry => {
  return (
    <Player
      playsInline
       poster={img}
      src={vid}
    />
  );
};