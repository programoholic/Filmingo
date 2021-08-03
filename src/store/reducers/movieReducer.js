import * as actionType from '../actions/actionTypes';
const initialState = {
     searchKey: '',
     movieList: [],
     page: 0,
     loading: true,
     selectedMovie: null,
     trailorData: null,
     genres: [],
     favouriteMovies: [],
     totalPages: 1
};

const reducer = (state = initialState, action) => {
     let newState;
     switch (action.type) {
          case actionType.INIT_MOVIE:
               newState = { ...state, 
                           loading: false, 
                           movieList: [...action.value.movies.results], 
                           genres: [...action.value.genres], 
                           favouriteMovies: [...action.value.favMovieList],
                           page : action.value.movies.page };
               return newState;
          case actionType.INPUT_CHANGED:
               newState = { ...state, searchKey: action.value };
               return newState;
          case actionType.SEARCH_MOVIE:
               newState = { ...state, loading: true, searchKey: action.value, page:1 }
               return newState;

          case actionType.MOVIE_FETCHED:
               newState = { ...state, loading: false, movieList: [...action.value.results],totalPages: action.value.total_pages,page: action.value.page}
               return newState;
          case actionType.NEXT_MOVIES_FETCHED: 
               newState = {...state,movieList:[...state.movieList,...action.value.results],page:action.value.page}
               return newState     
          case actionType.FETCH_MOVIE_DETAIL:
               newState = { ...state, selectedMovie: { ...action.value }, trailorData: null }
               return newState;
          case actionType.TRAILOR_FETCHED:
               newState = { ...state, trailorData: { ...action.value } };
               return newState;
          case actionType.FAV_ADDED:
               newState = {...state,favouriteMovies:[...action.value]}    
               return newState
          case actionType.FAV_REMOVED:
               newState = {...state,favouriteMovies:[...action.value]}   
               return newState     
          case actionType.INTI_FAV_MOVIE_SEARCH:
               newState = { ...state,loading:true}
               return newState
          case actionType.FAV_MOVIE_FETCHED:
               newState = {...state,loading:false,favouriteMovies:[...action.value.movies],genres:[...action.value.genres],page:1}    
               return newState 
          case actionType.RESET_MOVIE_DETAIL:
               newState = {...state,selectedMovie: null,trailorData: null}
               return newState     
          default: return state;
     }
}

export default reducer;