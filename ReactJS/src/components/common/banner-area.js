import { Link } from "react-router-dom";
import { banner_one } from "../../data";

const BannerArea = ({padd = "pb-110"}) => {
  return (
    <>
      <section className={`banner__area ${padd}`}>
        <div className="container">
          <div className="row">
            {banner_one.map((banner,index) => (
            <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="banner__item p-relative mb-40" style={{background:`url(${banner.bg_img})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
                <div className="banner__content">
                  <span className={banner.tag === 'new' ? 'orange' : ''}>{banner.tag}</span>
                  <h3 className="banner__title">
                    <Link to="/course-details">{banner.title}</Link>
                  </h3>
                  <Link to="/courses" className="e-btn e-btn-2">{banner.btn_text}</Link>
                </div>
                <div className="banner__thumb d-none d-sm-block d-md-none d-lg-block">
                  <img src={banner.img} alt=""/>
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

export default BannerArea;