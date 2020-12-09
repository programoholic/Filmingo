import React , { useState,useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import classes from './MovieDetails.module.css';
import { restAPIdetails } from  '../../core/AppContstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare , faPlayCircle , faArrowLeft, faClock, faStar, faCross, faVolumeOff,faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import MovieHeader from './MovieHeader/MovieHeader';
import MovieMetaInfo from './MovieMetaInfo/MovieMetaInfo'; 
import YTtrailor from '../YTtrailor/YTtrailor';
import Video from '../../Assets/bg.mov';
const POSTER_BASE_PATH = restAPIdetails.POSTER_BASE_PATH+'w1280//';

const MovieDetails = (props)=>{
     const [trailerMode,setTrailerMode] = useState(false)
     const [mute,setMute] = useState(false)
     console.log(props.movieDetail);
     const clicked = (event)=>{
         console.log('clkied chanhed');
           setTrailerMode(true);
           props.trailorClicked(props.movieDetail.title+' - trailor');
     }
     const closeTrailer = (e)=>{
        console.log('video is finished')
        setTrailerMode(false);
     }
     const toggleMute = ()=>{
         console.log('mute toggled',mute);
         setMute(!mute)

     }
     useEffect(()=>{
       console.log('compoent mounted !!!!');     
     },[])
     return (
         <div>
            { trailerMode && props.trailorData ?  
            (<div className={classes.videoBackground}>
                 <div className={classes.videoForeground}>
                         <YTtrailor video={props.trailorData} videoEnd={closeTrailer} isMuted={mute}/>
                </div>
                </div>
                ) :
             (
                 <div> 
                    <img className={classes.BannerImg} src = {`${POSTER_BASE_PATH}${props.movieDetail.backdrop_path}`} />  
                 </div>
             )
            }
             <div id="vidtop-content">
                 <div className={trailerMode ? [ classes.ToggledContent ,classes.vidInfo].join(' ') : classes.vidInfo}>
                     <h1>
                         <span style={{float:'left'}}>
                         <button onClick={props.clicked} className={classes.BackBtn}>
                             <FontAwesomeIcon icon={faArrowLeft} />
                         </button> </span>
                        <span style={{textAlign:'center',marginLeft: '20px'}}>  {props.movieDetail.title} </span>
                         <span style={{float:'right'}}> 
                            <button onClick={toggleMute} className={classes.BackBtn}>
                              <FontAwesomeIcon icon={ !mute? faVolumeUp : faVolumeMute} />
                            </button>   

                         </span>
                         </h1>
                     <h3>{props.movieDetail.tagline}  </h3>
                     <p> {props.movieDetail.overview} </p>
                     <a>
                         <MovieMetaInfo {...props.movieDetail} />
                     </a>
                     <a href='javascript:void(0)' onClick={clicked}>Watch Trailor </a>                     
                     <a >Add to Favourite </a>
                     <button onClick={closeTrailer} className={trailerMode ? classes.BackBtn : classes.Hidden}>
                             <FontAwesomeIcon icon={faArrowLeft} />
                     </button>
                 </div>
             </div>
         </div>    
     )
}

export default React.memo(MovieDetails);

