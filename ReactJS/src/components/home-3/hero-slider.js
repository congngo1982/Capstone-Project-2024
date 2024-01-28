import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Controller, EffectFade } from "swiper/modules";

import { hero_slider_data, hero_slider_nav } from "../../data";
import { Link } from "react-router-dom";


const HeroSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="slider__area p-relative">
        <div className="slider__wrapper swiper-container">
          <div className="swiper-wrapper">
            <Swiper
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              freeMode={false}
              watchSlidesProgress={true}
              effect="fade"
              modules={[Controller, FreeMode, EffectFade, Thumbs]}
              className="mySwiper"
            >
              {hero_slider_data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="single-slider slider__height slider__overlay d-flex align-items-center"
                      style={{ background: `url(${item.bg_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      <div className="container">
                        <div className="row">
                          <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                            <div className="slider__content">
                              <span>{item.sm_title}</span>
                              <h3 className="slider__title">{item.title_b_s} <span className="yellow-bg">{item.shape_text} <img src="/assets/img/shape/yellow-bg.png" alt="" /> </span> {item.title_a_s}
                              </h3>
                              <p>{item.text}</p>
                              <Link to="/about" className="e-btn slider__btn">{item.btn_text}</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
              }
            </Swiper>

          </div>
        </div>


        <div className="swiper-container slider__nav d-none d-md-block">

          <Swiper
            loop={true}
            spaceBetween={0}
            slidesPerView={4}
            onSwiper={setThumbsSwiper}
            modules={[Controller, FreeMode, Thumbs]}
            className="mySwiper"
            watchSlidesProgress={false}
          >
            {hero_slider_nav.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`slider__nav-item ${item.bgColor}`} style={{ background: `url(${item.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="slider__nav-content">
                    <span>{item.title}</span>
                    <h4>{item.subtitle}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </section>
    </>
  );
};

export default HeroSlider;