import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/movies";
// I want to get all of the movies
class MovieContainer extends Component {
  /// When I get to movieContainer it should fetch for the first time all of my movies

  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const movies = this.props.movies.map(movie => <li>{movie.title}</li>);
    return (
      <div>
        {this.props.isLoading ? <p>Loading</p> : <p>Not Loading</p>}
        <ul>{movies}</ul>
      </div>
    );
  }
}

/// I GIVE YOU STATE YOU GIVE ME PROPS

function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
