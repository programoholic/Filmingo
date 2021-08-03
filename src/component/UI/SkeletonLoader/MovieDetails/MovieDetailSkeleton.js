import React from 'react'
import Skeleton from 'react-loading-skeleton';
import classes from './MovieDetailSkeleton.module.css'
import Loader from '../../Loader/Loader'
const movieDetailSkeleton = (props) =>{
    return (
            <div className={classes.Loader}>
                {/* <Skeleton height={40}/> 
                <br></br>
                <br></br>
                <Skeleton height={20}/>
                <br></br>
                <br></br>
                <Skeleton height={300}/>
                <br></br>
                <br></br>
                <Skeleton height={10}/>
                <br></br>
                <br></br>
                <Skeleton height={10}/>
                <br></br>
                <br></br>
                <Skeleton height={10}/>
                <br></br>
                <br></br> */}
                <Loader />
            </div>
        
    )
}
export default movieDetailSkeleton