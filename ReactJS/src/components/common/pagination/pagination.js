import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({handlePageClick,pageCount}) => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-12">
          <div className="basic-pagination wow fadeInUp mt-30" data-wow-delay=".2s">
            <ReactPaginate
              nextLabel={<><span className="next link-btn">
                Next
                <i className="arrow_right"></i>
                <i className="arrow_right"></i>
              </span></>}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel={<><span className="prev link-btn link-prev">
                <i className="arrow_left"></i>
                <i className="arrow_left"></i>
                Prev
              </span></>}
              pageClassName="tp-page-item"
              pageLinkClassName="tp-page-link"
              previousClassName="tp-page-item prev"
              previousLinkClassName="tp-page-link"
              nextClassName="tp-page-item next"
              nextLinkClassName="tp-page-link"
              breakLabel="..."
              breakClassName="tp-page-item"
              breakLinkClassName="tp-page-link"
              containerClassName="tp-pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;