import { Link } from "react-router-dom";
import { Chat, OnlineCourse, Research, Support } from "../../svg";

const service_data = [
  {
    bg:'blue-bg-4',
    icon:<OnlineCourse/>,
    title:<>4,000 <br /> Online courses</>,
    subtitle:'Arse over tit morish wind up gormless butty.!'
  },
  {
    bg:'pink-bg',
    icon:<Support/>,
    title:<>Job placement<br /> Support</>,
    subtitle:'Arse over tit morish wind up gormless butty.!'
  },
  {
    bg:'purple-bg',
    icon:<Chat/>,
    title:<>Lifetime<br /> Slack chat support</>,
    subtitle:'Arse over tit morish wind up gormless butty.!'
  },
  {
    bg:'green-bg',
    icon:<Research/>,
    title:<>Research<br />  and Innovation</>,
    subtitle:'Arse over tit morish wind up gormless butty.!'
  },
]

const Services = () => {
  return (
    <>
      <section className="services__area pt-115 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
              <div className="section__title-wrapper section-padding mb-60 text-center">
                <h2 className="section__title">Why an <span className="yellow-bg">scholercity <img src="/assets/img/shape/yellow-bg-2.png" alt="" /></span> out of The ordinary</h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item,index) => (
            <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className={`services__item ${item.bg} mb-30`}>
                <div className="services__icon">
                  {item.icon}
                </div>
                <div className="services__content">
                  <h3 className="services__title"><Link to="/about">{item.title}</Link></h3>
                  <p>{item.subtitle}</p>

                  <Link to="/about" className="link-btn-2">
                    <i className="far fa-arrow-right"></i>
                    <i className="far fa-arrow-right"></i>
                  </Link>
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

export default Services;