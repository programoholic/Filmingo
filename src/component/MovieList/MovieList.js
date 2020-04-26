import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Movie from './Movie/Movie';
import classes from './MovieList.module.css';
const movieList = (props)=>{
    const movies = props.movieList.map((movie,index)=>{
        return <Movie 
                    key ={movie.id} {...movie} 
                    movieClicked={()=>{props.onMovieClicked(movie)}}
                    favClicked={()=>{props.onFavClicked(movie)}} />
    })    
    return (
        <InfiniteScroll
          dataLength={props.movieList.length}
          next={props.fetchMoreData}
          hasMore={true}
          className={classes.MovieList}
        >
           {movies}  
        </InfiniteScroll>
    )
}

export default movieList;