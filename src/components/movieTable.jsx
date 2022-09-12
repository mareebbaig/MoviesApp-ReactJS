import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  columns = [
    {
      title: "Title",
      path: "Title",
      content: (movie) => <Link to={`movies/${movie.id}`}>{movie.Title}</Link>,
    },
    { title: "Genre", path: "Genre" },
    { title: "Stock", path: "Stock" },
    { title: "Rate", path: "Rate" },
    { key: "like", content: (movie) => <Like /> },
    {
      key: "delete",
      content: (movie) => (
        <button
          className='btn btn-sm btn-danger'
          onClick={() => this.props.onDelete(movie)}>
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { filteredMovie, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={filteredMovie}
      />
    );
  }
}

export default MovieTable;
