import { EduCap, Mic, Promotion } from '../../svg';
import { hero_two } from '../../data';
import Counter from '../common/count-up';
import { Link } from 'react-router-dom';

const HeroArea = () => {
  return (
    <>
      <section className="hero__area hero__height hero__height-2 d-flex align-items-center blue-bg-3 p-relative fix">
        <div className="hero__shape">
          <img className="hero-1-circle" src="/assets/img/shape/hero/hero-1-circle.png" alt="" />
          <img className="hero-1-circle-2" src="/assets/img/shape/hero/hero-1-circle-2.png" alt="" />
          <img className="hero-1-dot-2" src="/assets/img/shape/hero/hero-1-dot-2.png" alt="" />
        </div>
        <div className="container">
          <div className="hero__content-wrapper mt-90">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="hero__content hero__content-2 p-relative z-index-1">
                  <h3 className="hero__title hero__title-2">
                    {hero_two.title}
                    <span className="yellow-shape"> {hero_two.shape_text}
                    <img src="/assets/img/shape/yellow-bg.png" alt="yellow-shape" /> 
                    </span>
                    {' '}{hero_two.title_2}
                  </h3>
                  <h4>{hero_two.subtitle}</h4>
                  <p>{hero_two.sm_text}</p>

                  <div className="hero__search">
                    <form onSubmit={e => e.preventDefault()}>
                      <div className="hero__search-input mb-10">
                        <input type="text" placeholder="What do you want to learn?" />
                        <button type="submit"><i className="fad fa-search"></i></button>
                      </div>
                    </form>
                    <p>You`re guaranteed to find something that`s right for you.</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="hero__thumb-wrapper mb--120">
                  <div className="hero__thumb-2 scene">
                    <img className="hero-big" src={hero_two.img} alt="" />
                    <img className="hero-shape-purple" src="/assets/img/hero/hero-2/hero-shape-purple.png" alt="" />
                    <div className="hero__promotion d-flex white-bg layer" data-depth="0.1">
                      <div className="hero__promotion-icon inspiration mr-10">
                        <span>
                          <Promotion/>
                        </span>
                      </div>
                      <div className="hero__promotion-text">
                        <h5>{hero_two.hero_thumb_title}</h5>
                        <p>{hero_two.hero_thumb_text}</p>
                      </div>
                    </div>
                    <div className="hero__promotion education d-none d-lg-flex white-bg layer" data-depth="0.2" >
                      <div className="hero__promotion-icon mr-10">
                        <span className="cap">
                          <EduCap/>
                        </span>
                      </div>
                      <div className="hero__promotion-text">
                        <h5><span className="counter"><Counter number={hero_two.hero_thumb_number} text="K" /></span></h5>
                        <p>{hero_two.hero_thumb_text_2}</p>
                      </div>
                    </div>
                    <div className="hero__class d-none d-lg-flex layer" data-depth="0.3">
                      <div className="hero__class-thumb mr-15">
                        <img src="/assets/img/hero/hero-2/hero-sm.jpg" alt="" />
                      </div>
                      <div className="hero__class-text">
                        <h5>{hero_two.hero_thumb_title_2}</h5>
                        <p>{hero_two.hero_thumb_text_3}</p>
                        <Link to="/contact">Join Now</Link>
                      </div>
                    </div>
                    <div className="hero__mic">
                      <span>
                        <Mic/>
                      </span>
                    </div>
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