import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './ToolBar.module.css';
const toolBar = (props)=>{
    return (
       <header className={classes.ToolBar}>
        <div>
            <h3> Filmingo </h3>
        </div>    
         <nav>
          <NavigationItems />
         </nav> 
        </header>    
       
    )
}
export default toolBar;