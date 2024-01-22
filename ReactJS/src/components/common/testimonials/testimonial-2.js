import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { testimonial_1 } from "../../../data";

const TestimonialTwo = () => {
  return (
    <>
      <section className="testimonial__area testimonial__overlay pt-175 pb-170" style={{background:'url(/assets/img/testimonial/testimonial-bg.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}} >
        <div className="container">
          <div className="col-xxl-12">
            <div className="testimonial__slider swiper-container">
              <div className="testimonial__slider-inner swiper-wrapper">

                <Swiper modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }}
                  autoplay={{ delay: 6000 }}
                >
                  {testimonial_1.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="testimonial__item text-center swiper-slide">
                          <div className="testimonial__thumb">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="testimonial__content">
                            <p>{item.content}</p>

                            <div className="testimonial__info">
                              <h4>{item.name}</h4>
                              <span>{item.title}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>

              <div className="swiper-button-next swiper-nav"><i className="far fa-arrow-right"></i></div>
              <div className="swiper-button-prev swiper-nav"><i className="far fa-arrow-left"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;