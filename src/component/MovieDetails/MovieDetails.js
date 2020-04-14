import React from 'react';
import Zoom from 'react-reveal/Zoom';
import classes from './MovieDetails.module.css';
import { restAPIdetails } from  '../../core/AppContstants';

const POSTER_BASE_PATH = restAPIdetails.POSTER_BASE_PATH+'w1280//';

const movieDetails = (props)=>{

     return (
        <div  className={classes.Detail} style={{  
            background : `url(${POSTER_BASE_PATH}${props.movieDetail.backdrop_path})`}}>
                <h3> {props.movieDetail.title} </h3>
                   <h6>{props.movieDetail.tagline}  </h6>
         </div> 
     )
}

export default movieDetails;

