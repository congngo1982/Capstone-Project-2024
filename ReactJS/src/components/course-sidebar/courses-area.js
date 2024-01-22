import React from 'react';
import { useSelector } from 'react-redux';

import useCourses from '../../hooks/use-courses';
import { selectCourses } from '../../redux/features/course-slice';
import { Grid, List } from '../../svg';
import CourseGrid from '../common/course/course-grid';
import CourseList from '../common/course/course-list';
import CourseSidebar from '../common/course/course-sidebar';

const CoursesArea = () => {
  const courses = useSelector(selectCourses)
  const { allCourses, setAllCourses } = useCourses();
  const short_filter = ['Default', 'Featured', 'Free', 'Paid', 'Trending'];

  const handleChange = (e) => {
    if (e.target.value === 'Default') {
      setAllCourses(courses)
    }
    if (e.target.value === 'Featured') {
      setAllCourses(courses.filter(item => item.featured))
    }
    if (e.target.value === 'Free') {
      setAllCourses(courses.filter(item => item.price === 'free'))
    }
    if (e.target.value === 'Paid') {
      setAllCourses(courses.filter(item => item.price !== 'free'))
    }
    if (e.target.value === 'Trending') {
      setAllCourses(courses.filter(item => item.trending))
    }
  }
  return (
    <>
      <section className="course__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__tab-inner grey-bg-2 mb-50 d-sm-flex justify-content-between align-items-center">
                <div className="course__tab-wrapper d-flex align-items-center">
                  <div className="course__tab-btn">
                    <ul className="nav nav-tabs" id="courseTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                          <Grid />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link list" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                          <List />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="course__view">
                    <h4>Showing 1 - {allCourses.length} of {courses.length}</h4>
                  </div>
                </div>
                <div className="course__sort d-flex justify-content-sm-end">
                  <div className="course__sort-inner">
                    <select onChange={handleChange}>
                      {short_filter.map((category, index) => (
                        <option key={index}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="course__tab-conent">
                <div className="tab-content" id="courseTabContent">
                  <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                    <div className="row">
                      <CourseGrid itemsPerPage={6} items={allCourses} col={'col-xxl-6 col-xl-6 col-lg-6 col-md-6'} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                    <div className="row">
                      <CourseList itemsPerPage={4} items={allCourses} content_4={true} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <CourseSidebar setAllCourses={setAllCourses}  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesArea;