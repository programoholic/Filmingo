import React,  { Component } from 'react';
import { connect } from 'react-redux';
import    MovieDetails  from '../../../component/MovieDetails/MovieDetails';
import * as actionCreators from '../../../store/actions/actionCreators';
import Zoom from 'react-reveal/Zoom';

class MovieDetail extends Component{
    state = {
        movieDetail : null
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        if(this.props.movieDetail=== null || this.props.movieDetail.id != id){
            this.props.onFetchMovieDetails(id);
        }
    }
    goBack = ()=>{
        this.props.history.goBack();
    }
    render(){
        return (
            <div style={{marginTop : '50px',}}> 
                  { this.props.movieDetail ?(
                  <MovieDetails 
                        clicked={this.goBack} 
                        trailorClicked = {this.props.onFetchTrailor}
                        movieDetail={this.props.movieDetail}
                        trailorData = { this.props.trailorData}
                         />
                   )   
                     : null }        
            </div>
           )
    }
}

const mapStateToProps = state =>{
    return {
        movieDetail : state.selectedMovie,
        trailorData : state.trailorData
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onFetchMovieDetails : (movieId) => dispatch(actionCreators.fetchMovieDetail(movieId)),
        onFetchTrailor : (movieString) => dispatch(actionCreators.fetchTrailorData(movieString))        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);