import React from 'react';
import classes from './MovieHeader.module.css';
const movieHeader = (props)=>{
    return (
            <div className={classes.Heading}>
              <h2 className={classes.Title}> {props.title} </h2>
              <h5 className={classes.SubTitle}>{props.tagline}  </h5>
            </div> 
    )
}

export default movieHeader;