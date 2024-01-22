import React from 'react';
import { Link } from 'react-router-dom';
import { EventData } from '../../data';

const event = {
  title:'Current',
  shape_text:'Events',
  subtitle:'We found 13 events available for you.'
}

const EventArea = () => {
  return (
    <>
      <section className="events__area pt-115 pb-120 p-relative">
        <div className="events__shape">
          <img className="events-1-shape" src="/assets/img/events/events-shape.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 offset-xxl-4">
              <div className="section__title-wrapper mb-60 text-center">
                <h2 className="section__title">{event.title} <span className="yellow-bg yellow-bg-big">{event.shape_text}
                  <img src="/assets/img/shape/yellow-bg.png" alt="" /></span></h2>
                <p>{event.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {EventData.map((event, index) => (
              <div key={index} className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="events__item mb-10 hover__active">
                  <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                    <div className="events__content">
                      <div className="events__meta">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                        <span>{event.city}</span>
                      </div>
                      <h3 className="events__title">
                        <Link to={`/event-details/${event.id}`}>{event.title}</Link>
                      </h3>
                    </div>
                    <div className="events__more">
                      <Link to={`/event-details/${event.id}`} className="link-btn">
                        View More
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

export default EventArea;