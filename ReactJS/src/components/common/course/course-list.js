import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import Pagination from '../pagination/pagination';
import {add_to_wishlist, wishlistItems} from '../../../redux/features/wishlist-slice';

const CourseList = ({ itemsPerPage, items,content_4 }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();
  const wishlists = useSelector(wishlistItems)

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
      {currentItems && currentItems.map((course, index) => (
        <div key={index} className="col-xxl-12">
          <div className="course__item list white-bg mb-30 fix">
            <div className="row gx-0">
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="course__thumb course__thumb-list w-img p-relative fix">
                  <Link to={`/course-details/${course.id}`}>
                    <img src={course.courseImage} alt="" />
                  </Link>
                  <div onClick={()=> dispatch(add_to_wishlist(course))} 
                  className={`heart_icon ${wishlists.findIndex(i => i.id === course.id) >= 0 ? 'active' : ''}`}>
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="course__tag">
                    <a href="#" className={course.color}>{course.category}</a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="course__right">
                  <div className={`course__content ${content_4 ? 'course__content-4' : 'course__content-3'}`}>
                    <div className="course__meta d-flex align-items-center">
                      <div className="course__lesson">
                        <span><i className="far fa-book-alt"></i>{course.lesson} Lesson</span>
                      </div>
                      <div className="course__rating">
                        <span><i className="icon_star"></i>{course.rating} ({course.total_rating})</span>
                      </div>
                    </div>
                    <h3 className={`course__title ${content_4 ? '' : 'course__title-3'}`}>
                      <Link to={`/course-details/${course.id}`}>{course.title}</Link>
                    </h3>
                    <div className="course__summary">
                      <p>{course.course_summary}</p>
                    </div>
                    <div className="course__teacher d-flex align-items-center">
                      <div className="course__teacher-thumb mr-15">
                        <img src={course.teacherImg} alt="" />
                      </div>
                      <h6><Link to="/instructor-details">{course.teacherName}</Link></h6>
                    </div>
                  </div>
                  <div className={`course__more course__more-2 ${content_4 ? 'course__more-3' : ''}
                   d-flex justify-content-between align-items-center`}>
                    {course.price === 'free' && <div className="course__status">
                      <span>Free</span>
                    </div>}
                    {course.price !== 'free' && <div className="course__status d-flex align-items-center">
                      <span className={course.color}>${course.price}</span>
                      {course.oldPrice && <span className="old-price">${course.oldPrice}</span>}
                    </div>}
                    <div className="course__btn">
                      <Link to={`/course-details/${course.id}`} className="link-btn">
                        Know Details
                        <i className="far fa-arrow-right"></i>
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
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

export default CourseList;