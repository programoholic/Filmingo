import * as actionType from './actionTypes';
import {
    restAPIdetails
} from '../../core/AppContstants';

const API_KEY = restAPIdetails.API_KEY;
const BASE_URL = restAPIdetails.BASE_URL;
const LANGUAGE = restAPIdetails.LANGUAGE;
const YT_API_KEY = restAPIdetails.YT_API_KEY;
const initMovieSearch = (movies, genres,favMovieList) => {
    return {
        type: actionType.INIT_MOVIE,
        value: { movies, genres,favMovieList }
    }
}
const movieFetched = (movies) => {
    return {
        type: actionType.MOVIE_FETCHED,
        value: movies
    }
}
const nextMovieFetched = (movies)=>{
    return {
        type: actionType.NEXT_MOVIES_FETCHED,
        value: movies
    }
}
const movieDetailFetched = (movie) => {
    return {
        type: actionType.FETCH_MOVIE_DETAIL,
        value: movie
    }
}
const movieTrailorFetched = (trailors) => {
    return {
        type: actionType.TRAILOR_FETCHED,
        value: trailors
    }
}
const movieSearchStarted = (searchTerm) => {
    return {
        type: actionType.SEARCH_MOVIE,
        value: searchTerm
    }
}
const favMovieAdded = (favMovies) => {
    return {
        type: actionType.FAV_ADDED,
        value: favMovies
    }
}
const favMovieRemoved = (favMovies) => {
    return {
        type: actionType.FAV_REMOVED,
        value: favMovies
    }
}
const favMovieSearchStarted = () =>{
    return {
        type : actionType.INTI_FAV_MOVIE_SEARCH,
    }
}
const favMovieFetched = (movies,genres) =>{
    return {
        type : actionType.FAV_MOVIE_FETCHED,
        value: {movies,genres}
    }
}
export const resetMovieDetails = () =>{
    return {
        type: actionType.RESET_MOVIE_DETAIL,
    }
}
export const getInitialMovies = () => {
    return dispatch => {
        Promise.all([fetchInitialMovies(), fetchMovieGenres(), getFavouriteMovies()])
            .then(result => {
                let genres = {}
                result[1].genres.forEach((item) => {
                    genres[item.id] = item.name
                })
                const favMovies = result[2]
                dispatch(initMovieSearch(result[0], [genres],favMovies))
            })
        // fetchInitialMovies().then((movies)=>{
        //     dispatch(initMovieSearch(movies.results))     
        // });
    }
}
 export const getFavMovies = ()=>{
     return dispatch =>{
         dispatch(favMovieSearchStarted())
         Promise.all([getFavouriteMovies(),fetchMovieGenres()])
         .then((result)=>{
            let genres = {}
            result[1].genres.forEach((item) => {
                genres[item.id] = item.name
            }) 
             dispatch(favMovieFetched(result[0],[genres]))
         })
        //  getFavouriteMovies().then((movies)=>{
        //      dispatch(favMovieFetched(movies))
        //  })
     }
 }
export const searchMovies = (searchTerm, page = 1) => {
    return dispatch => {
        dispatch(movieSearchStarted(searchTerm))
        fetchMovies(searchTerm, page).then((movies) => {
            dispatch(movieFetched(movies))
        });
    }
}

export const fetchNextMovies = (searchTerm, page) => {
    return dispatch => {
        fetchMovies(searchTerm, page).then((movies) => {
            dispatch(nextMovieFetched(movies));
        });
    }
}
export const fetchMovieDetail = (movieId, movieName) => {
    return dispatch => {
        fetchMovieDetails(movieId).then((movies) => {
            dispatch(movieDetailFetched(movies));
        });
    }
}

export const fetchTrailorData = (movieString) => {
    return dispatch => {
        fetchTrailor(movieString).then((result) => {
            dispatch(movieTrailorFetched(result.items[0]));
        });
    }
}

export const addFavMovie = (movie) => {
    return dispatch => {
        setFavouriteMovie(movie).then(async(result) => {
            let favMovies = await getFavouriteMovies()
            // dispatch(favMovieRemoved(favMovies))
            dispatch(favMovieAdded(favMovies))
        })
    }
}
export const removeFavMovie = (movieKey) => {
    return dispatch => {
        removeFavouriteMovie(movieKey).then(async(result) => {
            let favMovies = await getFavouriteMovies()
            dispatch(favMovieRemoved(favMovies))
        })
    }
}


async function fetchInitialMovies() {
    const movies = await fetch(BASE_URL + "/movie/top_rated?api_key=" + API_KEY + "&language=" + LANGUAGE)
    return movies.json();
}
async function fetchMovies(movieString, page) {
    const movies = await fetch(BASE_URL + "/search/movie?api_key=" + API_KEY + "&language=" + LANGUAGE + "&query=" + movieString + "&page=" + page);
    return movies.json();
}

async function fetchMovieDetails(movieId) {
    const movie = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`)
    return movie.json();
}
async function fetchTrailor(movieName) {
    const traliors = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${movieName}&type=video&videoDefinition=high&key=${YT_API_KEY}`
    )
    return traliors.json();
}
async function fetchMovieGenres() {
    const movies = await fetch(BASE_URL + "/genre/movie/list?api_key=" + API_KEY + "&language=" + LANGUAGE);
    return movies.json();
}

async function getFavouriteMovies() {
    const URL = restAPIdetails.DB_URL+`/favMovies.json`;
    const favMovies = await (await fetch(URL)).json()
    console.log(favMovies)
    return (favMovies)?
         Object.keys(favMovies).map(key =>({key: key,...favMovies[key]})) : []
}

async function setFavouriteMovie(movie) {
    const URL = restAPIdetails.DB_URL+`/favMovies.json`
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(movie) // body data type must match "Content-Type" header
    }
    const favMovies = await fetch(URL, options)
    return favMovies.json()
}
async function removeFavouriteMovie(movieKey) {
    const URL = restAPIdetails.DB_URL+`/favMovies/${movieKey}.json`
    const options = {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', 
    }
    const favMovies = await fetch(URL, options)
    return favMovies.json()
}