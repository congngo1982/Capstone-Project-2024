import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Pagination from '../pagination/pagination';

const BlogItem = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems && currentItems.map((blog, i) => (
        <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div className="blog__wrapper">
            <div className="blog__item white-bg mb-30 transition-3 fix">
              <div className="blog__thumb w-img fix">
                <Link to={`/blog-details/${blog.id}`}>
                  <img src={blog.blogImg} alt="" />
                </Link>
              </div>
              <div className="blog__content">
                <div className="blog__tag">
                  <a href="#" className={blog.color ? blog.color : ''}>{blog.category}</a>
                </div>
                <h3 className="blog__title">
                  <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
                </h3>

                <div className="blog__meta d-flex align-items-center justify-content-between">
                  <div className="blog__author d-flex align-items-center">
                    <div className="blog__author-thumb mr-10">
                      <img src={blog.author} alt="" />
                    </div>
                    <div className="blog__author-info">
                      <h5>{blog.authorName}</h5>
                    </div>
                  </div>
                  <div className="blog__date d-flex align-items-center">
                    <i className="fal fa-clock"></i>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* pagination start */}
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      {/* pagination end */}
    </>
  );
};

export default BlogItem;