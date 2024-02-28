import React from "react";
import ShortByNew from "../../components/Course/ShortByNew";
import Sidebar from "../../components/Course/Sidebar";
import CourseList from "../../components/Course/CourseList";

export default function Course() {
  return (
    <>
      <div className="breadcrumbarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper" data-aos="fade-up">
                <div className="breadcrumb__title">
                  <h2 className="heading">Featured Courses</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li> Featured Course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape__icon__2">
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__1"
            src="img/herobanner/herobanner__1.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__2"
            src="img/herobanner/herobanner__2.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__3"
            src="img/herobanner/herobanner__3.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__4"
            src="img/herobanner/herobanner__5.png"
            alt="photo"
          />
        </div>
      </div>

      <div class="coursearea sp_top_100 sp_bottom_100">
        <div class="container">
          <div class="row">
            <ShortByNew/>

            <Sidebar/>

            <CourseList/>
          </div>
        </div>
      </div>
    </>
  );
}
