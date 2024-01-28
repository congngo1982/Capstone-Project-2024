import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../../svg';

const EventDetailsArea = ({event}) => {
  return (
    <>
      <section className="event__area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="events__wrapper">
                <div className="events__thumb mb-35 w-img">
                  <img src={event.img} alt="" />
                </div>
                <div className="events__details mb-35">
                  <h3>Description</h3>
                  <p>{event.desc}</p>
                </div>
                <div className="events__allow mb-40">
                  <h3>This event will allow participants to:</h3>
                  <ul>
                    <li><i className="fal fa-check"></i> Business's managers, leaders</li>
                    <li><i className="fal fa-check"></i> Downloadable lectures, code and design assets for all projects</li>
                    <li><i className="fal fa-check"></i> Anyone who is finding a chance to get the promotion</li>
                  </ul>
                </div>
                <div className="events__tag">
                  <span><i className="fal fa-tag"></i></span>
                  <a href="#">Big data,  </a>
                  <a href="#">Data analysis,</a>
                  <a href="#">Data modeling</a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="events__sidebar pl-70">
                <div className="events__sidebar-widget white-bg mb-20">
                  <div className="events__sidebar-shape">
                    <img className="events-sidebar-img-2" src="/assets/img/events/event-shape-2.png" alt="" />
                    <img className="events-sidebar-img-3" src="/assets/img/events/event-shape-3.png" alt="" />
                  </div>
                  <div className="events__info">
                    <div className="events__info-meta mb-25 d-flex align-items-center justify-content-between">
                      <div className="events__info-price">
                        <h5>${event.price} </h5>
                        <h5 className="old-price">${event.old_price}</h5>
                      </div>
                      <div className="events__info-discount">
                        <span>68% OFF</span>
                      </div>
                    </div>
                    <div className="events__info-content mb-35">
                      <ul>
                        <li className="d-flex align-items-center">
                          <div className="events__info-icon">
                            <Event />
                          </div>
                          <div className="events__info-item">
                            <h5><span>End: </span> {event.date}</h5>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="events__info-icon">
                            <Event />
                          </div>
                          <div className="events__info-item">
                            <h5><span>Time:</span>  {event.time}</h5>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="events__info-icon">
                            <Event />
                          </div>
                          <div className="events__info-item">
                            <h5><span>Venue: </span> {event.city}</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="events__join-btn">
                      <Link to="/contact" className="e-btn e-btn-7 w-100">Enroll <i className="far fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="events__sidebar-widget white-bg">
                  <div className="events__sponsor">
                    <h3 className="events__sponsor-title">Sponsors</h3>
                    <div className="events__sponsor-thumb mb-35">
                      <img src="/assets/img/events/sponsor-logo.png" alt="" />
                    </div>
                    <div className="events__sponsor-info">
                      <h3>Thomas R. Toe</h3>
                      <h4>Email: <span>support@educal.com</span></h4>
                      <div className="events__social d-xl-flex align-items-center">
                        <h4>Share:</h4>
                        <ul>
                          <li><a href="#" className="fb" ><i className="social_facebook"></i></a></li>
                          <li><a href="#" className="tw" ><i className="social_twitter"></i></a></li>
                          <li><a href="#" className="pin" ><i className="social_pinterest"></i></a></li>
                        </ul>
                      </div>
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

export default EventDetailsArea;