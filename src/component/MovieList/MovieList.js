import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Movie from './Movie/Movie';
import classes from './MovieList.module.css';
import Loader from '../UI/Loader/Loader';

const movieList = (props) => {
    const viewableMovies = props.movieList.filter((movie) => movie.backdrop_path !== null)
    const movies = viewableMovies.map((movie, index) => {
        return <Movie
            key={movie.id} {...movie}
            movieClicked={() => { props.onMovieClicked(movie) }}
            favClicked={() => { props.onFavClicked(movie) }} 
            genres= {props.genres}
            />
    })
    return (
        <InfiniteScroll
            dataLength={props.movieList.length}
            next={props.fetchMoreData}
            loader={<div className={classes.More}> Loading movies ... </div>}
            endMessage={<div className={classes.More}> That's All folks ! ... </div>}
            hasMore={props.currentPage < props.totalPages}
            height={`calc(100vh - 160px)`}   
            className={classes.MovieList}
        >
            {movies}
        </InfiniteScroll>
    )
}

export default movieList;