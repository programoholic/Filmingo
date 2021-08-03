import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import SearchPanel from "../../component/SearchPanel/SearchPanel";
import MovieList from "../../component/MovieList/MovieList";
import * as actionCreators from "../../store/actions/actionCreators";
import * as actionTypes from "../../store/actions/actionTypes";
class Movies extends Component {
  constructor(props) {
    super(props);
    this.getMovies = _.debounce(this.getMovies, 1000);
  }

  state = {
    searchKey: this.props.searchKey,
    // selectedMovie : null,
    // isMainRoute : true,
  };

   componentDidMount() {
    if (this.props.movieList.length === 0) {
      this.props.onPageInit();
    }
  }

  changeHandler = (e) => {
    let value = e.target.value;
    this.setState({ searchKey: value });
    // this.props.onInputChange(value);
  };

  getMovies = () => {
    this.props.onMovieSearch(this.state.searchKey);
  };
  toggleFav = (e) => {};
  fetchData = () => {
    console.log("fetching for next data");
    this.props.onFetchMoreData(this.state.searchKey, this.props.page + 1);
  };
  onMovieClicked = (movie) => {
    this.props.history.push("/movies/detail/" + movie.id);
  };
  onBackClicked = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <SearchPanel
          loading={this.props.loading}
          changed={this.changeHandler}
          clicked={this.getMovies}
          text={this.state.searchKey}
        />
        <MovieList
          movieList={this.props.movieList}
          fetchMoreData={this.fetchData}
          onFavClicked={this.toggleFav}
          onMovieClicked={this.onMovieClicked}
          genres={this.props.genres}
          currentPage={this.props.page}
          totalPages={this.props.totalPages}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    page: state.page,
    loading: state.loading,
    searchKey: state.searchKey,
    genres: state.genres,
    totalPages: state.totalPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageInit: () => dispatch(actionCreators.getInitialMovies()),
    onMovieSearch: (searchTerm) =>
      dispatch(actionCreators.searchMovies(searchTerm)),
    onFetchMoreData: (searchTerm, page) =>
      dispatch(actionCreators.fetchNextMovies(searchTerm, page)),
    // onInputChange : (text)=> dispatch({type : actionTypes.INPUT_CHANGED ,value : text})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
