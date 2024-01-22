import { Link } from 'react-router-dom';
import useCourses from '../../../hooks/use-courses';

const InstructorDetailsArea = ({ instructor }) => {
  const { allCourses } = useCourses();
  const instructorCourses = allCourses.filter(course => course.teacherName === instructor.name);
  return (
    <>
      <section className="teacher__area pt-100 pb-110">
        <div className="page__title-shape">
          <img className="page-title-shape-5 d-none d-sm-block" src="/assets/img/page-title/page-title-shape-1.png" alt="" />
          <img className="page-title-shape-6" src="/assets/img/page-title/page-title-shape-6.png" alt="" />
          <img className="page-title-shape-3" src="/assets/img/page-title/page-title-shape-3.png" alt="" />
          <img className="page-title-shape-7" src="/assets/img/page-title/page-title-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="teacher__details-thumb p-relative w-img pr-30">
                <img src={instructor.img} alt="" />
                <div className="teacher__details-shape">
                  <img className="teacher-details-shape-1" src="/assets/img/teacher/details/shape/shape-1.png" alt="" />
                  <img className="teacher-details-shape-2" src="/assets/img/teacher/details/shape/shape-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="teacher__wrapper">
                <div className="teacher__top d-md-flex align-items-end justify-content-between">
                  <div className="teacher__info">
                    <h4>{instructor.name}</h4>
                    <span>Teaches {instructor.title}</span>
                  </div>
                  <div className="teacher__rating">
                    <h5>Review:</h5>
                    <div className="teacher__rating-inner d-flex align-items-center">
                      <ul>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                      </ul>
                      <p>4.5</p>
                    </div>
                  </div>
                  <div className="teacher__social-2">
                    <h4>Follow Us:</h4>
                    <ul>
                      {instructor.social_links.map((link, index) => (
                        <li key={index}><a href="#" className='me-2'><i className={link}></i></a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="teacher__follow mb-5">
                    <a href="#" className="teacher__follow-btn">follow <i className="icon_plus"></i> </a>
                  </div>
                </div>
                <div className="teacher__bio">
                  <h3>Short Bio</h3>
                  <p>{instructor.short_bio}</p>
                </div>
                <div className="teacher__courses pt-55">
                  <div className="section__title-wrapper mb-30">
                    <h2 className="section__title">Teacher <span className="yellow-bg yellow-bg-big">Course
                      <img src="/assets/img/shape/yellow-bg.png" alt="" /></span></h2>
                  </div>
                  <div className="teacher__course-wrapper">
                    <div className="row">
                      {instructorCourses.map((course, i) => (
                        <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                          <div className="course__item white-bg mb-30 fix">
                            <div className="course__thumb w-img p-relative fix">
                              <Link to={`/course-details/${course.id}`}>
                                <img src={course.courseImage} alt="" />
                              </Link>
                              <div className="course__tag">
                                <a href="#" className={course.color}>{course.category}</a>
                              </div>
                            </div>
                            <div className="course__content">
                              <div className="course__meta d-flex align-items-center justify-content-between">
                                <div className="course__lesson">
                                  <span><i className="far fa-book-alt"></i>{course.lesson} Lesson</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorDetailsArea;