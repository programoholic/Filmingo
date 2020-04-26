import * as actionType from './actionTypes';
import {
    restAPIdetails
} from '../../core/AppContstants';

const API_KEY = restAPIdetails.API_KEY;
const BASE_URL = restAPIdetails.BASE_URL;
const LANGUAGE = restAPIdetails.LANGUAGE;
const YT_API_KEY = restAPIdetails.YT_API_KEY;
const initMovieSearch = (movies) => {
    return {
        type: actionType.INIT_MOVIE,
        value: movies
    }
}
const movieFetched = (movies)=>{
    return {
        type : actionType.MOVIE_FETCHED,
        value : movies
    }
}
const movieDetailFetched = (movie)=>{
    return {
        type : actionType.FETCH_MOVIE_DETAIL,
        value : movie
    }
}
const movieTrailorFetched = (trailors)=>{
    return {
        type : actionType.TRAILOR_FETCHED,
        value : trailors
    }
}
export const getInitialMovies = () => { 
    return dispatch => {
        fetchInitialMovies().then((movies)=>{
            dispatch(initMovieSearch(movies.results))     
        });
    }
}

export const searchMovies = (searchTerm,page=1)=>{
    return dispatch =>{
         fetchMovies(searchTerm,page).then((movies)=>{
            dispatch(movieFetched(movies.results))      
        });
    }
}

export const fetchNextMovies = (searchTerm, page)=>{
    return dispatch =>{
         fetchMovies(searchTerm,page).then((movies)=>{
            dispatch(movieFetched(movies.results));     
         });
    }
}
export const fetchMovieDetail = (movieId,movieName)=>{
    return dispatch => {
        fetchMovieDetails(movieId).then((movies)=>{
            dispatch(movieDetailFetched(movies));
        });     
    }
}

export const fetchTrailorData =  (movieString)=>{
    return dispatch =>{
        fetchTrailor(movieString).then((result)=>{
            debugger
            dispatch(movieTrailorFetched(result.items[0]));
        });
    }
}
async function fetchInitialMovies(){
    const movies = await fetch(BASE_URL + "/movie/top_rated?api_key=" + API_KEY + "&language=" + LANGUAGE);
    return movies.json();
}
async function fetchMovies(movieString , page){
   const movies =  await fetch(BASE_URL+"/search/movie?api_key="+API_KEY+"&language="+LANGUAGE+"&query="+movieString+"&page="+page);
   return movies.json();
}

async function fetchMovieDetails (movieId) {
    const movie = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`)
    return movie.json();
}
async function fetchTrailor (movieName){
    const traliors = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${movieName}&type=video&videoDefinition=high&key=${YT_API_KEY}`
    )
    return traliors.json();
}