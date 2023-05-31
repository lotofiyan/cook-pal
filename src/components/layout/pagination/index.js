import React from "react";
import ReactPaginate from "react-paginate";

import PropTypes from "prop-types";

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
  return (
    <div className="w-full ">
      {pageCount && (
        <ReactPaginate
          className="flex flex-wrap items-center sm:justify-center justify-end gap-y-2"
          pageClassName="mx-2 w-7 flex justify-center items-center cursor-pointer text-black font-medium"
          containerClassName=""
          activeClassName="border bg-green rounded-full aspect-square w-7 text-white"
          breakLabel=". . ."
          nextLabel="next >"
          previousClassName="text-black hover:border hover:border-[#E2E8F0] hover:text-[#000000] px-3 font-medium"
          nextClassName="text-black hover:border hover:border-[#E2E8F0] hover:text-[#000000] px-3 font-medium"
          onPageChange={(page) => onPageChange(page.selected)} // Library uses zero index for page number
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          forcePage={currentPage} // Library uses zero index for page number
          breakClassName="page-item-break"
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.any,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.any,
};

export default Pagination;
