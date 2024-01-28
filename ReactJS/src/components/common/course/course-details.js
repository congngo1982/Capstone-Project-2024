import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ModalVideo from 'react-modal-video';

import { selectCourses } from '../../../redux/features/course-slice';
import RelatedCourse from './related-course';
import {cart_course} from '../../../redux/features/cart-slice';
import { Link } from 'react-router-dom';

const CourseDetailsArea = ({ course }) => {
  // all courses
  const courses = useSelector(selectCourses);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    {/* video modal start */}
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} 
    videoId={course.y_video_id} onClose={() => setOpen(false)} />
    {/* video modal end */}

      <section className="page__title-area pt-120 pb-90">
        <div className="page__title-shape">
          <img className="page-title-shape-5 d-none d-sm-block" 
          src="/assets/img/page-title/page-title-shape-1.png" alt="" />
          <img className="page-title-shape-6" src="/assets/img/page-title/page-title-shape-6.png" alt="" />
          <img className="page-title-shape-7" src="/assets/img/page-title/page-title-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__wrapper">
                <div className="page__title-content mb-25">
                  <div className="page__title-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/courses">Courses</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{course.title}</li>
                      </ol>
                    </nav>
                  </div>
                  <span className="page__title-pre">{course.category}</span>
                  <h5 className="page__title-3">{course.title}</h5>
                </div>
                <div className="course__meta-2 d-sm-flex mb-30">
                  <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                    <div className="course__teacher-thumb-3 mr-15">
                      <img src="/assets/img/course/teacher/teacher-1.jpg" alt="" />
                    </div>
                    <div className="course__teacher-info-3">
                      <h5>Teacher</h5>
                      <p><a href="#">{course.teacherName}</a></p>
                    </div>
                  </div>
                  <div className="course__update mr-80 mb-30">
                    <h5>Last Update:</h5>
                    <p>{course.last_update}</p>
                  </div>
                  <div className="course__rating-2 mb-30">
                    <h5>Review:</h5>
                    <div className="course__rating-inner d-flex align-items-center">
                      <ul>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                      </ul>
                      <p>{course.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="course__img w-img mb-30">
                  <img src={course.courseImage} alt="" />
                </div>
                <div className="course__tab-2 mb-45">
                  <ul className="nav nav-tabs" id="courseTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true"> <i className="icon_ribbon_alt"></i> <span>Discription</span> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link " id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false"> <i className="icon_book_alt"></i> <span>Curriculum</span> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"> <i className="icon_star_alt"></i> <span>Reviews</span> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Members</span> </button>
                    </li>
                  </ul>
                </div>
                <div className="course__tab-content mb-95">
                  <div className="tab-content" id="courseTabContent">
                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                      <div className="course__description">
                        <h3>Course Overview</h3>
                        <p>{course.overview}</p>

                        <div className="course__tag-2 mb-35 mt-35">
                          <i className="fal fa-tag"></i>
                          {course.tag.map((tag, index) => (
                            <a key={index} href="#">{tag}</a>
                          ))}
                        </div>
                        <div className="course__description-list mb-45">
                          <h4>What is the Target Audience?</h4>
                          <ul>
                            {course.target_audience.map((audience, i) => (
                              <li key={i}> <i className="icon_check"></i>{audience}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="course__instructor mb-45">
                          <h3>Other Instructors</h3>
                          <div className="course__instructor-wrapper d-md-flex align-items-center">
                            {course.other_instructor.map((instructor, i) => (
                              <div key={i} className="course__instructor-item d-flex align-items-center mr-70">
                                <div className="course__instructor-thumb mr-20">
                                  <img src={instructor.teacher_img} alt="" />
                                </div>
                                <div className="course__instructor-content">
                                  <h3>{instructor.teacher_name}</h3>
                                  <p>{instructor.teacher_title}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                      <div className="course__curriculum">
                        {course.curriculum.map((curr, i) => (
                          <div key={i} className="accordion" id={curr.id}>
                            <div className="accordion-item mb-50">
                              <h2 className="accordion-header" id={`week-0${i}`}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#week-0${i}-content`} aria-expanded="true"
                                  aria-controls={`week-0${i}-content`}>
                                  {curr.course_c_title}
                                </button>
                              </h2>
                              <div id={`week-0${i}-content`} className="accordion-collapse collapse show" aria-labelledby={`week-0${i}`} data-bs-parent={`#${curr.id}`}>
                                <div className="accordion-body">
                                  {curr.course_info.map((info, i) => (
                                    <div key={i} className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                      <div className="course__curriculum-info">
                                        {info.course_c_icon}
                                        <h3> <span>{info.course_c_text}</span>{info.course_c_text_2}</h3>
                                      </div>
                                      <div className="course__curriculum-meta">
                                        <span className="time"> <i className={info.clock_icon}></i>{info.minute}</span>
                                        {info.questions && <span className="question">{info.questions}</span>}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                      <div className="course__review">
                        <h3>Reviews</h3>
                        <p>{course.reviews.text}</p>

                        <div className="course__review-rating mb-50">
                          <div className="row g-0">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="course__review-rating-info grey-bg text-center">
                                <h5>5</h5>
                                <ul>
                                  <li><a href="#"> <i className="icon_star"></i> </a></li>
                                  <li><a href="#"> <i className="icon_star"></i> </a></li>
                                  <li><a href="#"> <i className="icon_star"></i> </a></li>
                                  <li><a href="#"> <i className="icon_star"></i> </a></li>
                                  <li><a href="#"> <i className="icon_star"></i> </a></li>
                                </ul>
                                <p>{course.total_rating} Ratings</p>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="course__review-details grey-bg">
                                <h5>Detailed Rating</h5>
                                <div className="course__review-content mb-20">
                                  <div className="course__review-item d-flex align-items-center justify-content-between">
                                    <div className="course__review-text">
                                      <span>{course.rating} stars</span>
                                    </div>
                                    <div className="course__review-progress">
                                      <div className="single-progress" data-width="100%"></div>
                                    </div>
                                    <div className="course__review-percent">
                                      <h5>100%</h5>
                                    </div>
                                  </div>
                                  <div className="course__review-item d-flex align-items-center justify-content-between">
                                    <div className="course__review-text">
                                      <span>4 stars</span>
                                    </div>
                                    <div className="course__review-progress">
                                      <div className="single-progress" data-width="30%"></div>
                                    </div>
                                    <div className="course__review-percent">
                                      <h5>30%</h5>
                                    </div>
                                  </div>
                                  <div className="course__review-item d-flex align-items-center justify-content-between">
                                    <div className="course__review-text">
                                      <span>3 stars</span>
                                    </div>
                                    <div className="course__review-progress">
                                      <div className="single-progress" data-width="0%"></div>
                                    </div>
                                    <div className="course__review-percent">
                                      <h5>0%</h5>
                                    </div>
                                  </div>
                                  <div className="course__review-item d-flex align-items-center justify-content-between">
                                    <div className="course__review-text">
                                      <span>2 stars</span>
                                    </div>
                                    <div className="course__review-progress">
                                      <div className="single-progress" data-width="0%"></div>
                                    </div>
                                    <div className="course__review-percent">
                                      <h5>0%</h5>
                                    </div>
                                  </div>
                                  <div className="course__review-item d-flex align-items-center justify-content-between">
                                    <div className="course__review-text">
                                      <span>1 stars</span>
                                    </div>
                                    <div className="course__review-progress">
                                      <div className="single-progress" data-width="0%"></div>
                                    </div>
                                    <div className="course__review-percent">
                                      <h5>0%</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course__comment mb-75">
                          <h3>2 Comments</h3>

                          <ul>
                            {course.reviews.comments.map((comment, i) => (
                              <li key={i}>
                                <div className="course__comment-box ">
                                  <div className="course__comment-thumb float-start">
                                    <img src={comment.user} alt="" />
                                  </div>
                                  <div className="course__comment-content">
                                    <div className="course__comment-wrapper ml-70 fix">
                                      <div className="course__comment-info float-start">
                                        <h4>{comment.name}</h4>
                                        <span>{comment.date}</span>
                                      </div>
                                      <div className="course__comment-rating float-start float-sm-end">
                                        <ul>
                                          <li><a href="#"> <i className="icon_star"></i> </a></li>
                                          <li><a href="#"> <i className="icon_star"></i> </a></li>
                                          <li><a href="#"> <i className="icon_star"></i> </a></li>
                                          <li><a href="#"> <i className="icon_star"></i> </a></li>
                                          <li><a href="#" > <i className="icon_star"></i> </a></li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="course__comment-text ml-70">
                                      <p>{comment.comment}</p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="course__form">
                          <h3>Write a Review</h3>
                          <div className="course__form-inner">
                            <form onSubmit={e => e.preventDefault()}>
                              <div className="row">
                                <div className="col-xxl-6">
                                  <div className="course__form-input">
                                    <input type="text" placeholder="Your Name" />
                                  </div>
                                </div>
                                <div className="col-xxl-6">
                                  <div className="course__form-input">
                                    <input type="email" placeholder="Your Email" />
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="course__form-input">
                                    <input type="text" placeholder="Review Title" />
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="course__form-input">
                                    <div className="course__form-rating">
                                      <span>Rating : </span>
                                      <ul>
                                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                                        <li><a href="#"> <i className="icon_star"></i> </a></li>
                                        <li><a href="#" className="no-rating" > <i className="icon_star"></i> </a></li>
                                        <li><a href="#" className="no-rating" > <i className="icon_star"></i> </a></li>
                                      </ul>
                                    </div>
                                    <textarea placeholder="Review Summary"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xxl-12">
                                  <div className="course__form-btn mt-10 mb-55">
                                    <button type="submit" className="e-btn">Submit Review</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="member" role="tabpanel" aria-labelledby="member-tab">
                      <div className="course__member mb-45">
                        {course.members.map((member, i) => (
                          <div key={i} className="course__member-item">
                            <div className="row align-items-center">
                              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                                <div className="course__member-thumb d-flex align-items-center">
                                  <img src={member.img} alt="" />
                                  <div className="course__member-name ml-20">
                                    <h5>{member.name}</h5>
                                    <span>{member.title}</span>
                                  </div>
                                </div>
                              </div>
                              {member.member_info.map((info, i) => (
                                <div key={i} className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                  <div className={`course__member-info ${info.pl}`}>
                                    <h5>{info.title <= 9 ? '0' + info.title : info.title}</h5>
                                    <span>{info.text}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="course__share">
                      <h3>Share :</h3>
                      <ul>
                        <li><a href="#" className="fb" ><i className="social_facebook"></i></a></li>
                        <li><a href="#" className="tw" ><i className="social_twitter"></i></a></li>
                        <li><a href="#" className="pin" ><i className="social_pinterest"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="course__related">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="section__title-wrapper mb-40">
                        <h2 className="section__title">Related <span className="yellow-bg yellow-bg-big">Course<img src="/assets/img/shape/yellow-bg.png" alt="" /></span></h2>
                        <p>You don't have to struggle alone, you've got our assistance and help.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="course__slider swiper-container pb-60">
                        {<Swiper modules={[Pagination]} spaceBetween={20}
                          slidesPerView={1} className="pb-60" loop={true}
                          pagination={{ el: '.swiper-pagination', clickable: true }}
                          autoplay={{ delay: 6000 }}
                          breakpoints={{
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 2
                            },
                          }}
                        >
                          {courses.slice(0, 4).map(item => {
                            return (
                              <SwiperSlide key={item.id}>
                                <div className="course__item course__item-3 swiper-slide white-bg mb-30 fix">
                                  <div className="course__thumb w-img p-relative fix">
                                    <Link to={`/course-details/${item.id}`}>
                                      <img src={item.courseImage} alt="" />
                                    </Link>
                                    <div className="course__tag">
                                      <a href="#" className={item.color}>{item.category}</a>
                                    </div>
                                  </div>
                                  <div className="course__content">
                                    <div className="course__meta d-flex align-items-center justify-content-between">
                                      <div className="course__lesson">
                                        <span><i className="far fa-book-alt"></i>{item.lesson} Lesson</span>
                                      </div>
                                      <div className="course__rating">
                                        <span><i className="icon_star"></i>{item.rating} ({item.total_rating})</span>
                                      </div>
                                    </div>
                                    <h3 className="course__title">
                                      <Link to={`/course-details/${item.id}`}>{item.title}</Link>
                                    </h3>
                                    <div className="course__teacher d-flex align-items-center">
                                      <div className="course__teacher-thumb mr-15">
                                        <img src={item.teacherImg} alt="" />
                                      </div>
                                      <h6><Link to="/instructor-details">{item.teacherName}</Link></h6>
                                    </div>
                                  </div>
                                  <div className="course__more d-flex justify-content-between align-items-center">
                                    {item.price === 'free' && <div className="course__status">
                                      <span>Free</span>
                                    </div>}
                                    {item.price !== 'free' && <div className="course__status d-flex align-items-center">
                                      <span className={item.color}>${item.price}</span>
                                      {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                                    </div>}
                                    <div className="course__btn">
                                      <Link to={`/course-details/${item.id}`} className="link-btn">
                                        Know Details
                                        <i className="far fa-arrow-right"></i>
                                        <i className="far fa-arrow-right"></i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            )
                          })
                          }
                          {/* <!-- Add Pagination --> */}
                          <div className="swiper-pagination"></div>
                        </Swiper>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="course__sidebar pl-70 p-relative">
                <div className="course__shape">
                  <img className="course-dot" src="/assets/img/course/course-dot.png" alt="" />
                </div>
                <div className="course__sidebar-widget-2 white-bg mb-20">
                  <div className="course__video">
                    <div className="course__video-thumb w-img mb-25">
                      <img src="/assets/img/course/video/course-video.jpg" alt="" />
                      <div className="course__video-play">
                        <button onClick={()=> setOpen(true)} className="play-btn"> 
                        <i className="fas fa-play"></i> </button>
                      </div>
                    </div>
                    <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                      <div className="course__video-price">
                        <h5>{course.price !== 'free' && '$'}{course.price}<span></span> </h5>
                        {course.oldPrice && <h5 className="old-price">${course.oldPrice}</h5>}
                      </div>
                      {course.price !== 'free' && <div className="course__video-discount">
                        <span>68% OFF</span>
                      </div>}
                    </div>
                    <div className="course__video-content mb-35">
                      <ul>
                        {course.course_content.map((content, i) => (
                          <li key={i} className="d-flex align-items-center">
                            <div className="course__video-icon">
                              {content.icon}
                            </div>
                            <div className="course__video-info">
                              <h5><span>{content.title}</span> {content.subtitle}</h5>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="course__payment mb-35">
                      <h3>Payment:</h3>
                      <a href="#">
                        <img src="/assets/img/course/payment/payment-1.png" alt="" />
                      </a>
                    </div>
                    <div className="course__enroll-btn">
                      <button onClick={()=> dispatch(cart_course(course))} className="e-btn e-btn-7 w-100">Add To Cart 
                      <i className="far fa-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
                <div className="course__sidebar-widget-2 white-bg mb-20">
                  {/* related courses */}
                  <RelatedCourse />
                  {/* related courses */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailsArea;