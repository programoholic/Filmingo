import React from 'react';
import Enzyme,{ shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

//Enzyme setup 

Enzyme.configure({Adapter: new Adapter()});

describe("<App />",()=>{

    it('should render App component',async()=>{
        // const component = shallow(<App />)

        // console.log('App : ',component)
    })
})