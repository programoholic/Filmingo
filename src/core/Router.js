import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';
import Movies from '../container/Movies/Movies';
import MovieDetail from '../container/Movies/MovieDetail/MovieDetail';
const router =  (props)=>{
    return (
    <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/detail/:id" component={MovieDetail} />
        <Redirect to="/movies" exact component={Movies} />
    </Switch> 
    )
}

export default router;