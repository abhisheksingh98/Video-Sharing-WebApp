import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {

    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        //if video is playing stop it
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
        //otherwise if it's not playing continue playing it
    }

    return (
        <div className = "video">
            <video
            onClick = {handleVideoPress}
            className = "video_player"
            loop
            ref = {videoRef}
            src="https://www.youtube.com/watch?v=K64S2WrclJ0&list=PLl4Y2XuUavmtPZCKAth-Ktqtpy62vjNe3&index=4&frags=wn&ab_channel=CodingBlocks">
            </video>

            <VideoFooter channel = "abhishek" description = "this is desc" song = "Closer Chainsmokers" />
            <VideoSidebar likes = {111} shares = {222} messages = {333} />

        </div>
    )
}

export default Video
