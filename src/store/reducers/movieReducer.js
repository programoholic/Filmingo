import * as actionType from '../actions/actionTypes';
const initialState={
    searchKey : '',
    movieList : [],
    page : 1,
    loading : true,
    selectedMovie : null,
    trailorData : null
};

const reducer = (state=initialState , action)=>{
    let newState;
    switch(action.type){
        case actionType.INIT_MOVIE : 
              newState = { ...state, loading : false , movieList : [ ...action.value ] };
             return newState;
        case actionType.INPUT_CHANGED :
             newState = { ...state , searchKey : action.value};
             return newState;     
        case actionType.SEARCH_MOVIE : 
              newState= { ...state , loading :true,searchKey : action.value  }
             return  newState;
            
        case actionType.MOVIE_FETCHED :
              newState = { ...state , loading : false , movieList : [ ...action.value ] }
             return newState; 
        case actionType.FETCH_MOVIE_DETAIL : 
             newState = {...state,selectedMovie : {...action.value}, trailorData : null}  
             return newState;
        case actionType.TRAILOR_FETCHED : 
             newState = { ...state, trailorData : {...action.value}};
             return newState;             
        default : return state;
    }
}

export default reducer;