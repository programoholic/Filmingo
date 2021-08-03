import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import MovieDetail from './MovieDetail';
import MovieDetails from '../../component/MovieDetails/MovieDetails';


configure({adapter : new Adapter()});

describe('<MovieDetail />', () => {
   
    let wrapper;
    let id;
    beforeEach(()=>{
        console.log('nidside before each')
        id=640344;
        // wrapper = shallow(<MovieDetail id={id} movieDetail={{id: 640344}} onFetchMovieDetails={()=>{}} />);
    })
    it('should render <MovieDetails /> when details are fetched', () => {
        // expect(wrapper.find(MovieDetails)).toHaveLength(1);
    });
    
});

