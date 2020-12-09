import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';

import classes from './Movie.module.scss';
import { restAPIdetails } from '../../../core/AppContstants';
const posterBasePath = restAPIdetails.POSTER_BASE_PATH+'w780//';
const Movie = (props)=>{
const [visible , setVisible] = useState(null);    
   const showDetail= (e)=>{
        setVisible(e);
    }
   const  hideDetail = (e)=>{
        setVisible(null)
    }
    return (
      <div className={classes.card}
        onMouseEnter={() => { showDetail(props) }}
        onMouseLeave={hideDetail}
        onClick={props.movieClicked}
      >
        <div className={classes.card__image__container}>
        <div className={classes.card__image}
         style={{
          background : `url('${posterBasePath + props.backdrop_path}') center top`,
          backgroundSize : 'cover',
          backgroundPosition : 'center',
          backgroundRepeat : 'no-repeat',
          width: '100%',
          height: '100%'
        }}
        >
        </div>
          {/* <img className={classes.card__image} src={posterBasePath + props.backdrop_path} alt="" /> */}
        </div>

        <svg className={classes.card__svg} viewBox="0 0 800 500">

          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
          <path className={classes.card__line} d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent" />
        </svg>

        <div className={classes.card__content}>
          <h2 className={classes.card__title}>{props.original_title}</h2>
          <p> {props.overview.substr(0,215)} {props.overview.length>215 ? '.....': ''} </p>
          <br></br>
        </div>
      </div>
    )

          {/* <div className= {classes.Movie} 
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
          </div>  */}
      
}
export default Movie;