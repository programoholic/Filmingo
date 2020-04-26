import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,configure } from 'enzyme';
import MovieList from './MovieList';
import Movie from './Movie/Movie';

configure({adapter : new Adapter()});

describe('<MovieList />', () => {
     let wrapper;
     let movies = [{},{}];

     beforeEach(()=>{
         wrapper = shallow(<MovieList movieList={movies}/>);
     })
     it('should render movie card when passed a movie Object', () => {
        expect(wrapper.find(Movie)).toHaveLength(2);
     });
     
});

