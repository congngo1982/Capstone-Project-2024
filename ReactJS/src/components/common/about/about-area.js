import React from 'react';
import { Link } from 'react-router-dom';

const about_info = {
  reviews: '8,200+',
  about_img: '/assets/img/about/about.jpg',
  about_banner: '/assets/img/about/about-banner.jpg',
  students_imgs: ['/assets/img/about/student-4.jpg', '/assets/img/about/student-3.jpg',
    '/assets/img/about/student-2.jpg', '/assets/img/about/student-1.jpg'],
  students: '4,000+',
  title: <>Achieve your <br /></>,
  shape_text: 'Goals',
  title_2: 'with Educal',
  desc: "Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.",
  about_list: ['Upskill your organization.', 'Access more then 100K online courses', 'Learn the latest skills']
}

const AboutArea = ({padd = "pt-90 pb-150"}) => {
  return (
    <>
      <section className={`about__area ${padd}`}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper">

                <div className="about__review">
                  <h5> <span>{about_info.reviews}</span> five ster reviews</h5>
                </div>
                <div className="about__thumb ml-100">
                  <img src={about_info.about_img} alt="" />
                </div>
                <div className="about__banner mt--210">
                  <img src={about_info.about_banner} alt="" />
                </div>
                <div className="about__student ml-270 mt--80">
                  <a href="#">
                    {about_info.students_imgs.map((img, index) => (
                      <img key={index} src={img} alt="" />
                    ))}
                  </a>
                  <p>Join over <span>{about_info.students}</span> students</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content pl-70 pr-60 pt-25">
                <div className="section__title-wrapper mb-25">
                  <h2 className="section__title">{about_info.title}<span className="yellow-bg-big">{about_info.shape_text} <img src="/assets/img/shape/yellow-bg-2.png" alt="" /></span>  {about_info.title_2} </h2>
                  <p>{about_info.desc}</p>
                </div>
                <div className="about__list mb-35">
                  <ul>
                    {about_info.about_list.map((list, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <i className="icon_check"></i> {list}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="e-btn e-btn-border">apply now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;