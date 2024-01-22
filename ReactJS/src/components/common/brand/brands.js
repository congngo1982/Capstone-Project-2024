import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const brandData = [
  {
    img: "/assets/img/brand/brand-1.png",
  },
  {
    img: "/assets/img/brand/brand-2.png",
  },
  {
    img: "/assets/img/brand/brand-3.png",
  },
  {
    img: "/assets/img/brand/brand-4.png",
  },
  {
    img: "/assets/img/brand/brand-5.png",
  },
  {
    img: "/assets/img/brand/brand-1.png",
  },
]

const Brands = () => {
  return (
    <>
      <section className="brand__area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="brand__content text-center">
                <h3 className="brand__title">Trusted by 100 world's best companies</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="brand__slider swiper-container">

                <Swiper
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={2}
                  breakpoints={{
                    // when window width is >= 576px
                    450: {
                        slidesPerView: 3
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 4
                    },
                    1200: {
                        // when window width is >= 992px
                        slidesPerView: 6,
                    }
                }}
                >
                  {brandData.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="swiper-slide">
                          <div className="brand__item text-center">
                            <img src={item.img} alt=""/>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>


              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="brand__more text-center">
                <Link to="/about" className="link-btn">
                  View all partners
                  <i className="far fa-arrow-right"></i>
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default Brands;