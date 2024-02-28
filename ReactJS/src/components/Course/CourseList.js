import React from "react";

export default function CourseList() {
  return (
    <>
      <div className="col-xl-9 col-lg-9 col-md-8 col-12">
        <div
          className="tab-content tab__content__wrapper with__sidebar__content"
          id="myTabContent"
        >
          <div
            className="tab-pane fade  active show"
            id="projects__one"
            role="tabpanel"
            aria-labelledby="projects__one"
          >
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img
                        loading="lazy"
                        src="img/grid/grid_1.png"
                        alt="grid"
                      />
                    </a>
                    <div className="gridarea__small__button">
                      <div className="grid__badge">Data &amp; Tech</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 23 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 1 hr 30 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          Foundation course to under stand about softwere
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      $32.00 <del>/ $67.00</del>
                      <span>
                        {" "}
                        <del className="del__2">Free</del>
                      </span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_1.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Mirnsdo .H</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <img loading="lazy" src="img/grid/grid_2.png" alt="grid" />
                    <div className="gridarea__small__button">
                      <div className="grid__badge blue__color">Mechanical</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 29 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 2 hr 10 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="#">
                          Nidnies course to under stand about softwere
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price green__color">
                      $32.00<del>/$67.00</del>
                      <span>.Free</span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_2.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Rinis Jhon</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img
                        loading="lazy"
                        src="img/grid/grid_3.png"
                        alt="grid"
                      />
                    </a>
                    <div className="gridarea__small__button">
                      <div className="grid__badge pink__color">Development</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 25 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 1 hr 40 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          Minws course to under stand about solution
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      $40.00 <del>/ $67.00</del>
                      <span>
                        {" "}
                        <del className="del__2">Free</del>
                      </span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_3.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Micle Jhon</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img
                        loading="lazy"
                        src="img/grid/grid_4.png"
                        alt="grid"
                      />
                    </a>
                    <div className="gridarea__small__button">
                      <div className="grid__badge green__color">
                        Ui &amp; UX Design
                      </div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 36 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 3 hr 40 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          Design course to under stand about solution
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      $40.00 <del>/ $67.00</del>
                      <span>
                        {" "}
                        <del className="del__2">Free</del>
                      </span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_4.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Micle Robin</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img
                        loading="lazy"
                        src="img/grid/grid_5.png"
                        alt="grid"
                      />
                    </a>
                    <div className="gridarea__small__button">
                      <div className="grid__badge orange__color">
                        Data &amp; Tech
                      </div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 36 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 3 hr 40 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          Data course to under stand about solution
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      $40.00 <del>/ $67.00</del>
                      <span>
                        {" "}
                        <del className="del__2">Free</del>
                      </span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_5.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Micle Robin</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img
                        loading="lazy"
                        src="img/grid/grid_6.png"
                        alt="grid"
                      />
                    </a>
                    <div className="gridarea__small__button">
                      <div className="grid__badge yellow__color">Big Data</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 30 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 3 hr 40 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          Big data to under stand about solution pacage
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      $40.00 <del>/ $67.00</del>
                      <span>
                        {" "}
                        <del className="del__2">Free</del>
                      </span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_5.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Micle Robin</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img
                        loading="lazy"
                        src="img/grid/grid_1.png"
                        alt="grid"
                      />
                    </a>
                    <div className="gridarea__small__button">
                      <div className="grid__badge">Data &amp; Tech</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 23 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 1 hr 30 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          Foundation course to under stand about softwere
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      $32.00 <del>/ $67.00</del>
                      <span>
                        {" "}
                        <del className="del__2">Free</del>
                      </span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_1.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Micle Jhon</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12 "
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <img loading="lazy" src="img/grid/grid_2.png" alt="grid" />
                    <div className="gridarea__small__button">
                      <div className="grid__badge blue__color">Mechanical</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 29 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 2 hr 10 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="#">
                          Nidnies course to under stand about softwere
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price green__color">
                      $32.00<del>/$67.00</del>
                      <span>.Free</span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_2.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Rinis Jhon</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12"
                data-aos="fade-up"
              >
                <div className="gridarea__wraper gridarea__wraper__2">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img
                        loading="lazy"
                        src="img/grid/grid_3.png"
                        alt="grid"
                      />
                    </a>
                    <div className="gridarea__small__button">
                      <div className="grid__badge pink__color">Development</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 25 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 1 hr 40 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          Minws course to under stand about solution
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      $40.00 <del>/ $67.00</del>
                      <span>
                        {" "}
                        <del className="del__2">Free</del>
                      </span>
                    </div>
                    <div className="gridarea__bottom">
                      <a href="instructor-details.html">
                        <div className="gridarea__small__img">
                          <img
                            loading="lazy"
                            src="img/grid/grid_small_3.jpg"
                            alt="grid"
                          />
                          <div className="gridarea__small__content">
                            <h6>Micle Jhon</h6>
                          </div>
                        </div>
                      </a>
                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="projects__two"
            role="tabpanel"
            aria-labelledby="projects__two"
          >
            <div
              className="gridarea__wraper gridarea__wraper__2 gridarea__course__list"
              data-aos="fade-up"
            >
              <div className="gridarea__img">
                <a href="course-details.html">
                  <img loading="lazy" src="img/grid/grid_1.png" alt="grid" />
                </a>
                <div className="gridarea__small__button">
                  <div className="grid__badge">Data &amp; Tech</div>
                </div>
                <div className="gridarea__small__icon">
                  <a href="#">
                    <i className="icofont-heart-alt" />
                  </a>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt" /> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time" /> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3>
                    <a href="course-details.html">
                      Become a product Manager learn the skills &amp; job.
                    </a>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/ $67.00</del>
                  <span>Free.</span>
                </div>
                <div className="gridarea__bottom">
                  <div className="gridarea__bottom__left">
                    <a href="instructor-details.html">
                      <div className="gridarea__small__img">
                        <img
                          loading="lazy"
                          src="img/grid/grid_small_1.jpg"
                          alt="grid"
                        />
                        <div className="gridarea__small__content">
                          <h6>Mirnsdo .H</h6>
                        </div>
                      </div>
                    </a>
                    <div className="gridarea__star">
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <span>(44)</span>
                    </div>
                  </div>
                  <div className="gridarea__details">
                    <a href="course-details.html">
                      Know Details
                      <i className="icofont-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="gridarea__wraper gridarea__wraper__2 gridarea__course__list"
              data-aos="fade-up"
            >
              <div className="gridarea__img">
                <img loading="lazy" src="img/grid/grid_2.png" alt="grid" />
                <div className="gridarea__small__button">
                  <div className="grid__badge blue__color">Mechanical</div>
                </div>
                <div className="gridarea__small__icon">
                  <a href="#">
                    <i className="icofont-heart-alt" />
                  </a>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt" /> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time" /> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3>
                    <a href="course-details.html">
                      Foundation course to under stand about softwere
                    </a>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/ $67.00</del>
                  <span>Free.</span>
                </div>
                <div className="gridarea__bottom">
                  <div className="gridarea__bottom__left">
                    <a href="instructor-details.html">
                      <div className="gridarea__small__img">
                        <img
                          loading="lazy"
                          src="img/grid/grid_small_1.jpg"
                          alt="grid"
                        />
                        <div className="gridarea__small__content">
                          <h6>Mirnsdo .H</h6>
                        </div>
                      </div>
                    </a>
                    <div className="gridarea__star">
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <span>(44)</span>
                    </div>
                  </div>
                  <div className="gridarea__details">
                    <a href="course-details.html">
                      Know Details
                      <i className="icofont-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="gridarea__wraper gridarea__wraper__2 gridarea__course__list"
              data-aos="fade-up"
            >
              <div className="gridarea__img">
                <a href="course-details.html">
                  <img loading="lazy" src="img/grid/grid_3.png" alt="grid" />
                </a>
                <div className="gridarea__small__button">
                  <div className="grid__badge pink__color">Development</div>
                </div>
                <div className="gridarea__small__icon">
                  <a href="#">
                    <i className="icofont-heart-alt" />
                  </a>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt" /> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time" /> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3>
                    <a href="course-details.html">
                      Strategy law and with for organization Foundation
                    </a>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/ $67.00</del>
                  <span>Free.</span>
                </div>
                <div className="gridarea__bottom">
                  <div className="gridarea__bottom__left">
                    <a href="instructor-details.html">
                      <div className="gridarea__small__img">
                        <img
                          loading="lazy"
                          src="img/grid/grid_small_1.jpg"
                          alt="grid"
                        />
                        <div className="gridarea__small__content">
                          <h6>Mirnsdo .H</h6>
                        </div>
                      </div>
                    </a>
                    <div className="gridarea__star">
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <span>(44)</span>
                    </div>
                  </div>
                  <div className="gridarea__details">
                    <a href="course-details.html">
                      Know Details
                      <i className="icofont-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="gridarea__wraper gridarea__wraper__2 gridarea__course__list"
              data-aos="fade-up"
            >
              <div className="gridarea__img">
                <a href="course-details.html">
                  <img loading="lazy" src="img/grid/grid_4.png" alt="grid" />
                </a>
                <div className="gridarea__small__button">
                  <div className="grid__badge green__color">
                    Ui &amp; UX Design
                  </div>
                </div>
                <div className="gridarea__small__icon">
                  <a href="#">
                    <i className="icofont-heart-alt" />
                  </a>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt" /> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time" /> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3>
                    <a href="course-details.html">
                      The business Intelligence analyst with Course &amp; 2023
                    </a>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/ $67.00</del>
                  <span>Free.</span>
                </div>
                <div className="gridarea__bottom">
                  <div className="gridarea__bottom__left">
                    <a href="instructor-details.html">
                      <div className="gridarea__small__img">
                        <img
                          loading="lazy"
                          src="img/grid/grid_small_1.jpg"
                          alt="grid"
                        />
                        <div className="gridarea__small__content">
                          <h6>Mirnsdo .H</h6>
                        </div>
                      </div>
                    </a>
                    <div className="gridarea__star">
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <span>(44)</span>
                    </div>
                  </div>
                  <div className="gridarea__details">
                    <a href="course-details.html">
                      Know Details
                      <i className="icofont-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="gridarea__wraper gridarea__wraper__2 gridarea__course__list"
              data-aos="fade-up"
            >
              <div className="gridarea__img">
                <a href="course-details.html">
                  <img loading="lazy" src="img/grid/grid_5.png" alt="grid" />
                </a>
                <div className="gridarea__small__button">
                  <div className="grid__badge orange__color">
                    Data &amp; Tech
                  </div>
                </div>
                <div className="gridarea__small__icon">
                  <a href="#">
                    <i className="icofont-heart-alt" />
                  </a>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt" /> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time" /> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3>
                    <a href="course-details.html">
                      Become a product Manager learn the skills &amp; job.
                    </a>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/ $67.00</del>
                  <span>Free.</span>
                </div>
                <div className="gridarea__bottom">
                  <div className="gridarea__bottom__left">
                    <a href="instructor-details.html">
                      <div className="gridarea__small__img">
                        <img
                          loading="lazy"
                          src="img/grid/grid_small_1.jpg"
                          alt="grid"
                        />
                        <div className="gridarea__small__content">
                          <h6>Mirnsdo .H</h6>
                        </div>
                      </div>
                    </a>
                    <div className="gridarea__star">
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <span>(44)</span>
                    </div>
                  </div>
                  <div className="gridarea__details">
                    <a href="course-details.html">
                      Know Details
                      <i className="icofont-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__pagination__wrapper" data-aos="fade-up">
          <ul className="main__page__pagination">
            <li>
              <a className="disable" href="#">
                <i className="icofont-double-left" />
              </a>
            </li>
            <li>
              <a className="active" href="#">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-double-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
