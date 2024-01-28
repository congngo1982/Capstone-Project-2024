import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Controller } from "swiper/modules";

import { testimonial_2, testimonial_2_nav } from "../../../data";

const TestimonialThree = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="testimonial__area pt-145 pb-150" style={{ background: `url(/assets/img/testimonial/home-3/testimonial-bg-3.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div className="testimonial__slider-3">
                <h3 className="testimonial__title">Student <br /> Community Feedback</h3>
                <div className="testimonial__slider-wrapper swiper-container testimonial-text mb-35">

                  <Swiper
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={false}
                    watchSlidesProgress={true}
                    modules={[Controller, FreeMode, Thumbs]}
                  >
                    {testimonial_2.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="testimonial__item-3">
                            <p>{item.desc}</p>
                            <div className="testimonial__info-2">
                              <h4>{item.name}</h4>
                              <span>{item.subtitle}</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })
                    }
                  </Swiper>
                </div>

                <div className="swiper-container testimonial-nav">
                  <Swiper
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={3}
                    onSwiper={setThumbsSwiper}
                    modules={[Controller, FreeMode, Thumbs]}
                    watchSlidesProgress={false}
                  >
                    {testimonial_2_nav.map((item, index) => (
                      <SwiperSlide key={index}>
                          <div className="testimonial__nav-thumb">
                            <img src={item.img} alt="" />
                          </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div className="testimonial__video ml-70 fix">
                <div className="testimonial__thumb-3">
                  <iframe src="https://www.youtube.com/embed/Rr0uFzAOQus" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="testimonial__video-content d-sm-flex">
                  <div className="testimonial__video-icon mr-20 mb-20">
                    <span>
                      <svg version="1.1" id="educal-youtube" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"
                        style={{ enableBackground: 'new 0 0 24 24' }} xmlSpace="preserve">
                        <path className="st0" d="M22,11.1V12c0,5.5-4.5,10-10,10C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2c1.4,0,2.8,0.3,4.1,0.9" />
                        <polyline className="st0" points="22,4 12,14 9,11 " />
                      </svg>
                    </span>
                  </div>
                  <div className="testimonial__video-text">
                    <h4>Course Outcome</h4>
                    <p>Faff about A bit of how's your father getmate cack codswallop crikey argy-bargy cobblers  lost his bottle.</p>
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

export default TestimonialThree;