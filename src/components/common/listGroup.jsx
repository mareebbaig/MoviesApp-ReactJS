import React from "react";

const ListGroup = ({
  Genre,
  selectedGenre,
  onGenreSelect,
  genreID,
  genreName,
}) => {
  return (
    <ul className='list-group'>
      {Genre.map((g) => {
        return (
          <li
            key={g[genreID]}
            className={
              g[genreName] === selectedGenre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onGenreSelect(g)}>
            {g[genreName]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  genreID: "id",
  genreName: "name",
};
export default ListGroup;
