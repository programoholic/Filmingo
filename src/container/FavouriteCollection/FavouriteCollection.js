import React, {Component} from 'react';
import { connect } from 'react-redux'
import MovieList from '../../component/MovieList/MovieList'
import * as actionCreators from '../../store/actions/actionCreators';
import * as actionTypes from '../../store/actions/actionTypes';
import classes from './FavouriteCollection.module.css'
class FavouriteCollection extends Component{
   
     constructor(props){
         super(props)
     }
    componentDidMount(){
       this.props.onFetchFavMovies()
    }
    onMovieClicked = (movie)=>{
        this.props.history.push('/movies/detail/'+movie.id);
    }
     render(){
         return(
             <div className ={classes.MovContainer}>
                <MovieList
                  movieList={this.props.favMovies}
                  onMovieClicked={this.onMovieClicked}
                  genres={this.props.genres}
                  currentPage={this.props.page}
                  totalPages= {this.props.totalPages}
                  />
             </div>
         )
     }
}

const mapStateToProps = state => {
    return {
        favMovies: state.favouriteMovies,
        loading: state.loading,
        page: state.page,
        totalPages: 1,
        genres: state.genres
    }
}

const mapDispatchToProps = dispatch =>{
    return {
         onFetchFavMovies: ()=>dispatch(actionCreators.getFavMovies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavouriteCollection);