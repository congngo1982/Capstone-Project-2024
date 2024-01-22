import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { selectCourses } from "../../../redux/features/course-slice";
import { add_to_wishlist, wishlistItems } from "../../../redux/features/wishlist-slice";

const course_info = {
  title: <>Find the Right<br />Online</>,
  shape_text: 'Course',
  title_2: 'for you',
  subtitle: "You don't have to struggle alone, you've got our assistance and help."
}

const Courses = () => {
  const allCourses = useSelector(selectCourses);
  const [courses, setCourses] = useState(allCourses.slice(0, 6));
  const [active, setActive] = useState('all');
  const wishlists = useSelector(wishlistItems)
  console.log(wishlists);
  const dispatch = useDispatch();

  const handleTrendingCourse = (category) => {
    setActive(category)
    if (category === 'all') {
      setCourses(allCourses.slice(0, 6))
    }
    if (category === 'trending') {
      setCourses(allCourses.filter(course => course.trending_1))
    }
    if (category === 'popularity') {
      setCourses(allCourses.filter(course => course.popularity_1))
    }
    if (category === 'featured') {
      setCourses(allCourses.filter(course => course.featured_1))
    }
    if (category === 'art_design') {
      setCourses(allCourses.filter(course => course.art_design_1))
    }
  }

  // handle wishlist
  const handleWishList = (course) => {
    dispatch(add_to_wishlist(course));
  }

  return (
    <>
      <section className="course__area pt-115 pb-120 grey-bg">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="section__title-wrapper mb-60">
                <h2 className="section__title">{course_info.title} <span className="yellow-bg yellow-bg-big">{course_info.shape_text}<img src="/assets/img/shape/yellow-bg.png" alt="" /></span> {course_info.title_2}</h2>
                <p>{course_info.subtitle}</p>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6">
              <div className="course__menu d-flex justify-content-lg-end mb-60">
                <div className="masonary-menu filter-button-group">
                  <button onClick={() => handleTrendingCourse('all')} className={active === 'all' ? 'active' : ''}>
                    See All <span className="tag">new</span>
                  </button>
                  <button className={active === 'trending' ? 'active' : ''}
                    onClick={() => handleTrendingCourse('trending')}>Trending</button>
                  <button className={active === 'popularity' ? 'active' : ''}
                    onClick={() => handleTrendingCourse('popularity')}>Popularity</button>
                  <button className={active === 'featured' ? 'active' : ''}
                    onClick={() => handleTrendingCourse('featured')}>Featured</button>
                  <button className={active === 'art_design' ? 'active' : ''}
                    onClick={() => handleTrendingCourse('art_design')}>Art & Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid">
            {courses.map((course, index) => (
              <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item white-bg mb-30 fix">
                  <div className="course__thumb w-img p-relative fix">
                    <Link to={`/course-details/${course.id}`}>
                      <img src={course.courseImage} alt="" />
                    </Link>
                    <div onClick={() => handleWishList(course)}
                      className={`heart_icon 
                      ${wishlists?.findIndex(i => i.id === course.id) >= 0 ? 'active' : ''}`}>
                      <i className="fas fa-heart"></i>
                    </div>
                    <div className="course__tag">
                      <a href="#" className={course.color}>{course.category}</a>
                    </div>
                  </div>
                  <div className="course__content">
                    <div className="course__meta d-flex align-items-center justify-content-between">
                      <div className="course__lesson">
                        <span><i className="far fa-book-alt"></i>43 Lesson</span>
                      </div>
                      <div className="course__rating">
                        <span><i className="icon_star"></i>{course.rating} ({course.total_rating})</span>
                      </div>
                    </div>
                    <h3 className="course__title">
                      <Link to={`/course-details/${course.id}`}>{course.title}</Link>
                    </h3>
                    <div className="course__teacher d-flex align-items-center">
                      <div className="course__teacher-thumb mr-15">
                        <img src={course.teacherImg} alt="" />
                      </div>
                      <h6><Link to="/instructor-details">{course.teacherName}</Link></h6>
                    </div>
                  </div>
                  <div className="course__more d-flex justify-content-between align-items-center">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;