import React from 'react';
import { Link } from 'react-router-dom';
import { HeroOne } from '../../data';

const HeroArea = () => {
  return (
    <>
      <section className="hero__area hero__height d-flex align-items-center grey-bg-2 p-relative">
        <div className="hero__shape">
          <img className="hero-1-circle" src="/assets/img/shape/hero/hero-1-circle.png" alt="" />
          <img className="hero-1-circle-2" src="/assets/img/shape/hero/hero-1-circle-2.png" alt="" />
          <img className="hero-1-dot-2" src="/assets/img/shape/hero/hero-1-dot-2.png" alt="" />
        </div>
        <div className="container">
          <div className="hero__content-wrapper mt-90">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="hero__content p-relative z-index-1">
                  <h3 className="hero__title">
                    <span>{HeroOne.sm_text}</span>
                    <span className="yellow-shape">{HeroOne.shape_text}
                      <img src="/assets/img/shape/yellow-bg.png" alt="yellow-shape" /> </span>
                    {HeroOne.title}</h3>
                  <p>{HeroOne.subtitle}</p>
                  <Link to="/courses" className="e-btn">{HeroOne.btn_text}</Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="hero__thumb d-flex p-relative">
                  <div className="hero__thumb-shape">
                    <img className="hero-1-dot" src="/assets/img/shape/hero/hero-1-dot.png" alt="" />
                    <img className="hero-1-circle-3" src="/assets/img/shape/hero/hero-1-circle-3.png" alt="" />
                    <img className="hero-1-circle-4" src="/assets/img/shape/hero/hero-1-circle-4.png" alt="" />
                  </div>
                  <div className="hero__thumb-big mr-30">
                    <img src={HeroOne.hero_img} alt="" />
                    <div className="hero__quote hero__quote-animation">
                      <span>{HeroOne.hero__quote}</span>
                      <h4>{HeroOne.hero__quote_2}</h4>
                    </div>
                  </div>
                  <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                    <img src={HeroOne.hero_sm_img} alt="" />
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

export default HeroArea;