import React , { Component } from 'react';
import _ from "lodash";

import SearchPanel from '../../component/SearchPanel/SearchPanel';
import MovieList from '../../component/MovieList/MovieList';
import { restAPIdetails } from '../../core/AppContstants';
const API_KEY = restAPIdetails.API_KEY;
const BASE_URL = restAPIdetails.BASE_URL;
const LANGUAGE = restAPIdetails.LANGUAGE; 
class Movies extends Component {
    
    constructor(props){

        super(props);
        this.getMovies = _.debounce(this.getMovies, 1000);
    }
    state = {
        searchKey : '',
        movieList : [],
        page : 1,
        loading : true
    }

    componentDidMount(){
        fetch(BASE_URL+"/movie/top_rated?api_key="+API_KEY+"&language="+LANGUAGE).then((response)=>{
            return response.json();
        })
        .then((movies)=>{
            console.log(movies.results);
            this.setState({
                movieList : movies.results,
                loading : false
            })
        })
    }
    
    changeHandler = (e)=>{
        let value = e.target.value
        this.setState({searchKey : value},()=>{
            this.getMovies();
       })
        }
       
    getMovies = ()=>{ 
        if(this.state.searchKey){
            this.setState({page :1 , loading : true},()=>{
                console.log('this.get movies', this.state.searchKey)
                fetch(
                    BASE_URL+"/search/movie?api_key="+API_KEY+"&language="+LANGUAGE+"&query="+this.state.searchKey+"&page="+this.state.page)
                     .then((response)=>{
                         return response.json();
                     })
                     .then((movies)=>{
                         let movieLi =  movies.results;
                         this.setState({movieList : movieLi, loading : false})
                     })
            })
            
        }
    }
    toggleFav=(e)=>{
        console.log('******* fav clicked',e);
    }
    fetchData = ()=>{
        console.log('called fetch')
        if(this.state.searchKey){ 
        let newPage = this.state.page;
        newPage = newPage+1;
        this.setState({page : newPage , loading : true},()=>{
           fetch(
                BASE_URL+"/search/movie?api_key="+API_KEY+"&language="+LANGUAGE+"&query="+this.state.searchKey+"&page="+this.state.page)
                 .then((response)=>{
                     return response.json();
                 })
                 .then((movies)=>{
                     let movieLi =  movies.results;
                     let newList = this.state.movieList;
                     newList = newList.concat(movieLi);
                     this.setState({movieList : newList , loading : false})
                 })
        })
    }
    }
    onMovieClicked= (movie)=>{
         console.log('movie cliked','/movie/details/'+movie.id);
         this.props.history.replace('/movies/detail/'+movie.id);
    }

    render(){
        return (
            <div>
              <SearchPanel loading={this.state.loading} changed={this.changeHandler} text={this.state.searchKey}/>
              <MovieList 
                    movieList={this.state.movieList} 
                    fetchMoreData ={this.fetchData}
                    onFavClicked={this.toggleFav}
                    onMovieClicked= {this.onMovieClicked}
                    />
            </div>
        )
    }
}
export default Movies;