import React , { useEffect} from 'react';
import YouTube from 'react-youtube';

const API_KEY = `AIzaSyCmFcenQelZ_PjV2gaegZKJKxUlgosjmnI`;


const YTtrailor = (props)=>{
    let ytObj = null;
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 1,
          modestbranding :0,
          rel : 0,
          loop: 1,
          mute : props.isMuted //0
        },
      };
      const onReady = (e)=>{
        console.log('YT playe is ready .... s',e);
        ytObj = e;
    }
    const toggleMute = () => {
        if (ytObj.target.isMuted) {
            ytObj.target.unMute();
        } else {
            ytObj.target.mute();
        }
    }
    return (
        <div>
            <YouTube videoId={props.video.id.videoId} opts={opts} onReady={onReady}
              onEnd={props.videoEnd} 
            />
        </div>
    )
}

export default YTtrailor;
