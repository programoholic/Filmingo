import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';
import Movies from '../container/Movies/Movies';
import MovieDetail from '../container/MovieDetail/MovieDetail';
import FavouriteCollection from '../container/FavouriteCollection/FavouriteCollection'
const router =  (props)=>{
    return (
    <Switch>
        <Route exact path="/movies" component={Movies}/>
        {/* <Route path={["/movies", "/movies/detail/:id"]} component={Movies} /> */}
        <Route exact path="/movies/detail/:id" component={MovieDetail} />
        <Route exact path="/collections" component={FavouriteCollection} />
        <Redirect to="/movies" exact component={Movies} />
    </Switch> 
    )
}

export default router;