import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';

import MovieDetails from '../../component/MovieDetails/MovieDetails';
import * as actionCreators from '../../store/actions/actionCreators';
import MovieDetailSkeleton from '../../component/UI/SkeletonLoader/MovieDetails/MovieDetailSkeleton' 
class MovieDetail extends Component {
    state = {
        movieDetail: null,
        fav: false
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        if (this.props.movieDetail === null || this.props.movieDetail.id != id) {
            this.props.onFetchMovieDetails(id);
        }
    }
    goBack = () => {
        this.props.onResetMovieDetails();
        this.props.history.goBack();
    }
    toggleFavouite = (movieId) => {
        let favMovie = this.props.favouriteMovies.find((movie) => (movie.id === movieId))
        let movie = this.props.movieList.find((movie) => (movie.id === movieId))
        if (favMovie) {
            this.props.onRemoveFavouriteMovies(favMovie.key)
        } else {
            this.props.onAddFavouriteMovies(movie)
        }
    }
    render() {
        const isFav = this.props.movieDetail ? ((this.props.favouriteMovies.filter((item) => (item.id === this.props.movieDetail.id))).length > 0) : false
        return (
            <div style={{ marginTop: '50px', }}>
                { this.props.movieDetail ? (
                    <MovieDetails
                        clicked={this.goBack}
                        trailorClicked={this.props.onFetchTrailor}
                        movieDetail={this.props.movieDetail}
                        trailorData={this.props.trailorData}
                        favClicked={this.toggleFavouite}
                        fav={isFav}
                    />
                )
                    : <MovieDetailSkeleton />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieDetail: state.selectedMovie,
        trailorData: state.trailorData,
        favouriteMovies: state.favouriteMovies,
        movieList: state.movieList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieDetails: (movieId) => dispatch(actionCreators.fetchMovieDetail(movieId)),
        onFetchTrailor: (movieString) => dispatch(actionCreators.fetchTrailorData(movieString)),
        onAddFavouriteMovies: (movie) => dispatch(actionCreators.addFavMovie(movie)),
        onRemoveFavouriteMovies: (movie) => dispatch(actionCreators.removeFavMovie(movie)),
        onResetMovieDetails: () => dispatch(actionCreators.resetMovieDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);