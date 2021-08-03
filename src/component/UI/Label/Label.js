import React  from 'react'
import classes from './Label.module.css'
const label = (props)=>{
    return (
        
            <div className={classes.Label}>
                {props.name}
            </div>
        
    )
}

export default label