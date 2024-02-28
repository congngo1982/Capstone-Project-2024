import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-4 col-12">
        <div className="course__sidebar__wraper" data-aos="fade-up">
          <div className="course__heading">
            <h5>Search here</h5>
          </div>
          <div className="course__input">
            <input type="text" placeholder="Search product" />
            <div className="search__button">
              <button>
                <i className="icofont-search-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="course__sidebar__wraper" data-aos="fade-up">
          <div className="categori__wraper">
            <div className="course__heading">
              <h5>Categories</h5>
            </div>
            <div className="course__categories__list">
              <ul>
                <li>
                  <a href="#">
                    Mobile Handset
                    <span>03</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Americano Dish
                    <span>07</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Raxila Dish nonyte
                    <span>09</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Fresh Vegetable
                    <span>01</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Fruites
                    <span>00</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="course__sidebar__wraper" data-aos="fade-up">
          <div className="course__heading">
            <h5>Tag</h5>
          </div>
          <div className="course__tag__list">
            <ul>
              <li>
                <a href="#">
                  <div className="course__check__box active " />
                  <span className="active">Mechanic</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="course__check__box  " />
                  <span>English</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="course__check__box  " />
                  <span>Computer Science</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="course__check__box  " />
                  <span>Data &amp; Tech</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="course__check__box  " />
                  <span>Ux Desgin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="course__sidebar__wraper" data-aos="fade-up">
          <div className="course__heading">
            <h5>Skill Level</h5>
          </div>
          <div className="course__skill__list">
            <ul>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Fullstack</a>
              </li>
              <li>
                <a href="#">English Learn</a>
              </li>
              <li>
                <a href="#">Intermediate</a>
              </li>
              <li>
                <a href="#">Wordpress</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
