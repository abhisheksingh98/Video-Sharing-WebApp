import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from"react-ticker"

function VideoFooter() {
    return (
        <div className = "videoFooter">
            <div className="videoFooter__text">
            <h3>@abhishek</h3>
            <p>some description</p>
            <div className="videoFooter__ticker">
            <MusicNoteIcon className = "videoFooter__icon" />
            <Ticker mode = "smooth">
                {({index}) => (
                    <>
                    <p>I am a song</p>
                    </>
                )}            
            </Ticker>
            
            <img
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
          className="videoFooter__record"
        />

            </div>
            </div>
        </div>
    )
}

export default VideoFooter
