import React from 'react';
import classes from './SearchPanel.module.css';
import Loader from '../UI/Loader/Loader';
const searchPanel = (props)=>{
    return (

        <div className={classes.SearchPanel}>
            <input type="text" 
                   className={classes.SearchInput}
                   onChange={props.changed} 
                   value={props.text} 
                   placeholder="type to seach movies..." />
             <span className={classes.LoadingDiv}> { props.loading ? <Loader /> :null }  </span>      
        </div>    

    )
}


export default searchPanel;