import { Link } from "react-router-dom";

const what_content = {
  title: 'What is',
  shape_text: 'Skilline?',
  desc: "Sloshed faff about me old mucker blatant bubble and squeak hanky panky some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow off I'm telling up the kyver he legged it bleeder jolly good, "
}

const what_data = [
  {
    col: 'offset-xl-1 offset-xl-1',
    thumb: '/assets/img/what/what-1.jpg',
    title: <>Mostly <br /> Online Learning</>,
    btn_text: 'Start a class today',
  },
  {
    thumb: '/assets/img/what/what-2.jpg',
    title: <>Become <br /> an Instructor</>,
    btn_text: 'Start a class today',
  },
]

const WhatArea = () => {
  return (
    <>
      <section className="what__area pt-115">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="section__title-wrapper mb-60 text-center">
                <h2 className="section__title">{what_content.title} <span className="yellow-bg-big">
                  {what_content.shape_text} <img src="/assets/img/shape/yellow-bg-2.png" alt="" /></span>
                </h2>
                <p>{what_content.desc}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {what_data.map((item, index) => (
              <div key={index} className={`col-xxl-5 col-xl-5 col-lg-6 ${item.col ? item.col : ''}`}>
                <div className="what__item transition-3 mb-30 p-relative fix">
                  <div className="what__thumb w-img">
                    <img src={item.thumb} alt="" />
                  </div>
                  <div className="what__content p-absolute text-center">
                    <h3 className="what__title white-color">{item.title}</h3>
                    <Link to="/contact" className="e-btn e-btn-border-2">{item.btn_text}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatArea;