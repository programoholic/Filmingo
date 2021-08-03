import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import MovieList from "./MovieList";
import Movie from "./Movie/Movie";
import * as testData from "../../specs/testData";
configure({ adapter: new Adapter() });

describe("<MovieList />", () => {
  let wrapper;
  const mock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <MovieList movieList={testData.movie} onMovieClicked={mock} />
    );
  });
  afterEach(() => {
    wrapper = null;
  });

  it("should render movie card when passed a movie array", () => {
    expect(wrapper.find(Movie)).toHaveLength(1);
  });

  it("should call a movie handler when ", () => {
    // console.log('dom is  : ',dom)
    const movie = wrapper.find(Movie);
    expect(movie).toHaveLength(1);
    //  console.log('**********************************88',movie.at(0))
    movie.at(0).props().movieClicked();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
