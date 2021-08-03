import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Movie from "./Movie";
import classes from './Movie.module.scss';
import Label from '../../UI/Label/Label';
import * as testData from '../../../specs/testData'
describe("<Movie />", () => {
  Enzyme.configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(()=>{
  })
  afterEach(()=>{
      wrapper  = null;
  })

  it("should render <Movie /> component", async () => {
    wrapper = shallow(<Movie {...testData.movie[0]} genres = {testData.genreValues} />)
    wrapper.setProps({ genres: testData.genreValues });
    expect(wrapper.exists()).toBe(true);
    const label = wrapper.find(Label);
    console.log('Label ############################ :Movie_card__1ks0J ',label);
    expect(label).toHaveLength(2)
    expect(wrapper.find(classes.card__content)).not.toBe(null)

  });
  it('should not render label if genres are not passed',async()=>{
      const movie = {...testData.movie[0],genre_ids:[]}
      wrapper = shallow(<Movie {...movie} />)
      const label = wrapper.find(classes.card)
      console.log('Label : ',label);
      expect(wrapper.find(Label)).toBeFalsy;
  })
  it('should redirect when clicked on module',()=>{
    wrapper = shallow(<Movie {...testData.movie[0]} genres = {testData.genreValues} movieClicked={()=>{}} />)
    const card = wrapper.find('.movie-card');
    card.simulate('click')
    console.log('card',card);
  })

  it('should add ... if the movie description is more than 215 characters',()=>{
    wrapper = shallow(<Movie {...testData.movie[0]} genres = {testData.genreValues} />)
    const overview = wrapper.find('#overview');
    expect(overview).toHaveLength(1)
    expect(overview.text()).toContain("...");
    console.log(overview.text())
  })

});
