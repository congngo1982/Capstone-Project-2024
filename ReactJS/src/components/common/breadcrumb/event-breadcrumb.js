import React from 'react';
import { Link } from 'react-router-dom';

const EventBreadcrumb = ({event}) => {
  return (
    <>
      <section className="page__title-area pt-120">
        <div className="page__title-shape">
          <img className="page-title-shape-5 d-none d-sm-block"
            src="/assets/img/page-title/page-title-shape-1.png" alt="" />
          <img className="page-title-shape-6" src="/assets/img/page-title/page-title-shape-2.png" alt="" />
          <img className="page-title-shape-7" src="/assets/img/page-title/page-title-shape-4.png" alt="" />
          <img className="page-title-shape-8" src="/assets/img/page-title/page-title-shape-5.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8">
              <div className="page__title-content mb-25 pr-40">
                <div className="page__title-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item"><Link to="/courses">Event</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">{event.title}</li>
                    </ol>
                  </nav>
                </div>
                <span className="page__title-pre purple-bg">{event.category}</span>
                <h5 className="page__title-3">{event.title}</h5>
              </div>
              <div className="course__meta-2 d-sm-flex mb-30">
                <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                  <div className="course__teacher-thumb-3 mr-15">
                    <img src={event.teacherImg} alt="" />
                  </div>
                  <div className="course__teacher-info-3">
                    <h5>Teacher</h5>
                    <p><a href="#">{event.teacherName}</a></p>
                  </div>
                </div>
                <div className="course__update mr-80 mb-30">
                  <h5>Last Update:</h5>
                  <p>{event.date}</p>
                </div>
                <div className="course__update mb-30">
                  <h5>Location:</h5>
                  <p>{event.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventBreadcrumb;