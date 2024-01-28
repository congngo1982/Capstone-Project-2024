import { Link } from "react-router-dom";

const w_c_content = {
  sm_title:'Why Choses Me',
  title_b_s:'Tools for',
  shape_text:'Teachers',
  title_a_s:'and Learners',
  desc:'Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.',
  img:'/assets/img/why/why.png'
}

const WhyChose = () => {
  return (
    <>
      <section className="why__area pt-125">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
              <div className="why__content pr-50 mt-40">
                <div className="section__title-wrapper mb-30">
                  <span className="section__sub-title">{w_c_content.sm_title}</span>
                  <h2 className="section__title">{w_c_content.title_b_s} <span className="yellow-bg yellow-bg-big">
                    {w_c_content.shape_text}<img src="/assets/img/shape/yellow-bg.png" alt="" /></span> 
                    {w_c_content.title_a_s}</h2>
                  <p>{w_c_content.desc}</p>
                </div>
                <div className="why__btn">
                  <Link to="/contact" className="e-btn e-btn-3 mr-30">Join for Free</Link>
                  <Link to="/about" className="link-btn">
                    Learn More
                    <i className="far fa-arrow-right"></i>
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
              <div className="why__thumb">
                <img src={w_c_content.img} alt="" />
                <img className="why-green" src="/assets/img/why/why-shape-green.png" alt="" />
                <img className="why-pink" src="/assets/img/why/why-shape-pink.png" alt="" />
                <img className="why-dot" src="/assets/img/why/why-shape-dot.png" alt="" />
                <img className="why-line" src="/assets/img/why/why-shape-line.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChose;