import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
// import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
// import { configure, shallow } from 'enzyme';
import NavigationItems from './NavigationItems';
import NavigationItem from  './NavigationItem/NavigationItem';
import navigationItem from './NavigationItem/NavigationItem';


configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    })
    it('should render 2 <NavigationItem > by default', () => {
        expect(wrapper.find(navigationItem)).toHaveLength(2);
    });
    // it('should have movies as active class by default',()=>{
    //     expect(wrapper.find())
    // })
    
});
