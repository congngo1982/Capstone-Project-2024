import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCourses } from '../../redux/features/course-slice';

const course_content = {
  title_b_s:'Online',
  shape_text:'Courses',
  title_a_s:<><br /> For anyone, anywhere</>,
  sm_text:"You don't have to struggle alone, you've got our assistance and help."
}

const CoursesThree = () => {
  const courses = useSelector(selectCourses).filter(item => item.home_3);
  return (
    <>
      <section className="course__area grey-bg pt-115 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
              <div className="section__title-wrapper mb-60">
                <h2 className="section__title">{course_content.title_b_s}<span className="yellow-bg"> {course_content.shape_text} 
                 <img src="/assets/img/shape/yellow-bg-2.png" alt="" />  </span> {course_content.title_a_s}
                </h2>
                <p>{course_content.sm_text}</p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
              <div className="category__more mb-60 float-md-end fix">
                <Link to="/courses" className="link-btn">
                  View All Courses
                  <i className="far fa-arrow-right"></i>
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {courses.map((course,index) => (
            <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="course__item course__item-2 white-bg mb-30 transition-3">
                <div className="course__thumb fix w-img">
                  <Link to={`/course-details/${course.id}`}>
                    <img src={course.courseImage} alt="" />
                  </Link>
                </div>
                <div className="course__content-2">
                  <h3 className="course__title-2">
                    <Link to={`/course-details/${course.id}`}>{course.title}</Link>
                  </h3>
                  <p>{course.course_summary}</p>
                  <div className="course__bottom d-sm-flex justify-content-between align-items-center">
                    <div className="course__teacher-2 d-flex align-items-center">
                      <div className="course__teacher-thumb-2 mr-20">
                        <img src={course.teacherImg} alt="" />
                        <div className="course__teacher-rating">
                          <i className="icon_star"></i>
                        </div>
                      </div>
                      <div className="course__teacher-info">
                        <h6><Link to="/instructor-details">{course.teacherName}</Link></h6>
                        <span>{course.category}</span>
                      </div>
                    </div>
                    <div className="course__meta">
                      <div className="course__lesson">
                        <span><i className="far fa-book-alt"></i>{course.lesson} Lesson</span>
                      </div>
                    </div>
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

export default CoursesThree;