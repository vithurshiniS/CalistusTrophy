import React from 'react';
import VideoPlayer from 'react-video-js-player';
import videofile from '../assets/introVideo.mp4';

export default function Videotry() {
    const vid = videofile;
    const poster = 'https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80'

    
  return (
    <div>
        <VideoPlayer src={vid} posster={poster}/>
    </div>
    
  )
}
