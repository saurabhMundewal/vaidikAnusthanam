import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        // </button>
        <li
          className={i === currentPage ? "page-item active" : "page-item"}
          key={i}
          onClick={() => handleClick(i)}
        >
          <a className="page-link">{i}</a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <ul className="pagination mb-0">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="far fa-chevron-left" />{" "}
          </button>
        </li>
        {renderPageNumbers()}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="far fa-chevron-right" />
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
