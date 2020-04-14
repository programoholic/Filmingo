import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';

import classes from './Movie.module.css';
import { restAPIdetails } from '../../../core/AppContstants';
const posterBasePath = restAPIdetails.POSTER_BASE_PATH+'w300//';
const Movie = (props)=>{
const [visible , setVisible] = useState(null);    
   const showDetail= (e)=>{
        setVisible(e);
    }
   const  hideDetail = (e)=>{
        setVisible(null)
    }
    return (
        <Slide left>
          <div className= {classes.Movie} 
               onMouseEnter= {()=>{showDetail(props)}} 
               onMouseLeave= {hideDetail} 
               onClick={props.movieClicked}
               >
            <div className={classes.Poster}>
            <img src={posterBasePath+props.poster_path} alt="poster"/>
            </div>
            <div className={classes.active}>
                <h3 className={classes.Heading}>  {props.original_title} 
                <span className={classes.vote}> {props.vote_average} </span>                
                    <a href="#" onClick={props.favClicked} className={classes.FavBtn}> + </a>
                </h3>
          </div>   
          </div> 
          </Slide>
    )
}
export default Movie;