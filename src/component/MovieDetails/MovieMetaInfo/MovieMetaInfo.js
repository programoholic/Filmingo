import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import classes from './MovieMetaInfo.module.css';
const movieMetaInfo = (props)=>{
    let language = props.spoken_languages.map((lang)=> lang.name);
    let duration = {
        hrs : `${Math.floor(props.runtime /60)} h`,
        mins : ` ${props.runtime % 60} m`
    };
    return (
        <div className={classes.MetaInfo}>
            <span className={classes.MetaItem}>
                <FontAwesomeIcon icon={faStar} className={classes.Icon} />
                {props.vote_average}
            </span>
            <span className={classes.MetaItem}>
                <FontAwesomeIcon icon={faClock} className={classes.Icon} />
                {duration.hrs + duration.mins}
            </span>
            <span className={classes.MetaItem}>
                {props.adult ? <span> 18+ </span> : <span> 12+ </span>}
            </span>
            <span className={classes.MetaItem}> {language.join(', ')} </span>
        </div>
    )
}
export default movieMetaInfo;