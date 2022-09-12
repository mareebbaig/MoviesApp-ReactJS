import React from "react";
import PropTypes from "prop-types";

const Paging = ({ totalMovies, pageSize, currPage, onPageChange }) => {
  const numberOfPages = Math.ceil(totalMovies / pageSize);

  var pages = Array(numberOfPages)
    .fill(null)
    .map((_, i) => i + 1);

  if (numberOfPages === 1) return;
  else
    return (
      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-center'>
          {pages.map((page) => {
            return (
              <li
                key={page}
                className={
                  currPage === page ? "page-item active" : "page-item"
                }>
                <a
                  href='#'
                  className='page-link'
                  onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
};

Paging.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paging;
