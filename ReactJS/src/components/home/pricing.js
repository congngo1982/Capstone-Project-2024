import React from 'react';
import { Link } from 'react-router-dom';

const pricing_data = [
  {
    id: 1,
    pricing_plan: [
      {
        price_title: 'Gold',
        price_subtitle: 'Perfect for small marketing teams',
        price: <>59<span>.99 / annually</span></>,
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship']
      },
      {
        tag: true,
        price_title: 'Diamond',
        price_subtitle: 'Perfect for small marketing teams',
        price: <>99<span>.99 / annually</span></>,
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship', 'Online Course']
      },
    ],
  },
  {
    id: 2,
    pricing_plan: [
      {
        price_title: 'Gold',
        price_subtitle: 'Perfect for small marketing teams',
        price: <>79<span>.99 / annually</span></>,
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship']
      },
      {
        tag: true,
        price_title: 'Diamond',
        price_subtitle: 'Perfect for small marketing teams',
        price: <>120<span>.99 / annually</span></>,
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship', 'Online Course']
      },
    ],
  },
]

const Pricing = () => {
  return (
    <>
      <section className="price__area pt-60 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 offset-xxl-4">
              <div className="section__title-wrapper mb-60 text-center">
                <h2 className="section__title">Simple <br /> All Inclusive  <span className="yellow-bg yellow-bg-big">Pricing<img src="/assets/img/shape/yellow-bg.png" alt="" /></span></h2>
                <p>No contracts. No surprise fees.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="price__tab-btn text-center mb-50">
                <nav>
                  <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-tab-1" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">monthly plan</button>
                    <button className="nav-link" id="nav-tab-1" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Annual Plan</button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <div className="price__tab-content">
                <div className="tab-content" id="nav-tabContent">
                  {pricing_data.map((item, index) => (
                    <div key={index} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                      id={`nav-${item.id}`} role="tabpanel" aria-labelledby={`nav-tab-${item.id}`}>
                      <div className="row">
                        {item.pricing_plan.map((price, index) => (
                          <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="price__item grey-bg mb-30 p-relative">
                              {price.tag && <div className="price__offer">
                                <span>Best Value</span>
                              </div>}
                              <div className="price__head">
                                <h3>{price.price_title}</h3>
                                <p>{price.price_subtitle}</p>
                              </div>
                              <div className="price__tag mb-25">
                                <h4>${price.price}</h4>
                              </div>
                              <div className="price__features mb-40">
                                <ul>
                                  {price.price_features.map((feature, index) => (
                                    <li key={index}><i className="far fa-check"></i>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                              <Link to="/contact" className={`e-btn ${index === 0 ? 'e-btn-4' : 'e-btn-border'}`}>
                                Get Started
                              </Link>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;