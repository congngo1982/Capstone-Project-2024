import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCourses } from '../../../redux/features/course-slice';

const RelatedCourse = () => {
  // all courses
  const courses = useSelector(selectCourses);
  return (
    <>
      <div className="course__sidebar-course">
        <h3 className="course__sidebar-title">Related courses</h3>
        <ul>
          {courses.slice(1, 4).map((course, index) => (
            <li key={index}>
              <div className="course__sm d-flex align-items-center mb-30">
                <div className="course__sm-thumb mr-20">
                  <Link to={`/course-details/${course.id}`}>
                    <img src={course.courseImage} alt="" />
                  </Link>
                </div>
                <div className="course__sm-content">
                  <div className="course__sm-rating">
                    <ul>
                      <li><a href="#"> <i className="icon_star"></i> </a></li>
                      <li><a href="#"> <i className="icon_star"></i> </a></li>
                      <li><a href="#"> <i className="icon_star"></i> </a></li>
                      <li><a href="#"> <i className="icon_star"></i> </a></li>
                      <li><a href="#"> <i className="icon_star"></i> </a></li>
                    </ul>
                  </div>
                  <h5><Link to={`/course-details/${course.id}`}>{course.category}</Link></h5>
                  <div className="course__sm-price">
                    <span>${course.price}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RelatedCourse;