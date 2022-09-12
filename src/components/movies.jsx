import React, { Component } from "react";
import { getMovies } from "../services/movieFakeServices";
import Paging from "./common/paging";
import { Paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenre } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    Genre: [],
    selectedGenre: "",
    sortColumn: {
      path: "Title",
      order: "asc",
    },
    currPage: 1,
    pageSize: 4,
  };

  handleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({
      movies,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currPage: 1 });
  };

  componentDidMount() {
    const Genre = [{ id: "", name: "All Genre" }, ...getGenre()];
    this.setState({ movies: getMovies(), Genre });
  }

  getPageData = () => {
    const {
      currPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre.id
        ? allMovies.filter((m) => m.Genre === selectedGenre.name)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = Paginate(sorted, currPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;

    const { currPage, pageSize, Genre, selectedGenre, sortColumn } = this.state;

    if (count === 0) return <p>There are no Movies in the DataBase</p>;

    const { totalCount, data: movies } = this.getPageData();

    // if (movies.length === 0) this.handlePageChange(currPage - 1);

    return (
      <div className='row'>
        <div className='col-2 m-5 '>
          <ListGroup
            Genre={Genre}
            onGenreSelect={this.handleGenreSelect}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className='col m-2'>
          <p>Showing {totalCount} movies from the DataBase</p>
          <MovieTable
            filteredMovie={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDeleteMovie}
            onSort={this.handleSort}
          />
          <Paging
            totalMovies={totalCount}
            pageSize={pageSize}
            currPage={currPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
