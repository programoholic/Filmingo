import React,  { Component } from 'react';
import { restAPIdetails } from  '../../../core/AppContstants';
import    MovieDetails  from '../../../component/MovieDetails/MovieDetails';

const API_KEY = restAPIdetails.API_KEY;
const BASE_URL = restAPIdetails.BASE_URL;
const LANGUAGE = restAPIdetails.LANGUAGE; 

class MovieDetail extends Component{
    state = {
        movieDetail : null
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
            .then((response)=>{
            return response.json();
            })
            .then((movieDetail)=>{
                  this.setState({movieDetail :  movieDetail})
            });
    }
    
    render(){
        return (
            <div style={{marginTop : '50px',}}> 
                  { this.state.movieDetail ?
                    <MovieDetails movieDetail={this.state.movieDetail} />    
                     : null }        
            </div>
           )
    }
}
 

export default MovieDetail;