import { Link } from "react-router-dom";
import {
  Academics, ArtDesign, Business, DataScience, Finance, HealthFitness,
  Lifestyle, Marketing, Music
} from "../../svg";


const category_data = [
  {
    id: 1,
    icon: <DataScience />,
    title: 'Data Science',
    subtitle: 'Data is Everything',
  },
  {
    id: 2,
    icon: <Business />,
    title: 'Business',
    subtitle: 'Improve your business',
  },
  {
    id: 3,
    icon: <ArtDesign />,
    title: 'Art & Design',
    subtitle: 'Fun & Challenging',
  },
  {
    id: 4,
    icon: <Lifestyle />,
    title: 'Lifestyle',
    subtitle: 'New Skills, New You',
  },
  {
    id: 5,
    icon: <Marketing />,
    title: 'Marketing',
    subtitle: 'Improve your business',
  },
  {
    id: 6,
    icon: <Finance />,
    title: 'Finance',
    subtitle: 'Fun & Challenging',
  },
  {
    id: 7,
    icon: <HealthFitness />,
    title: 'Health & Fitness',
    subtitle: 'Invest to Your Body',
  },
  {
    id: 8,
    icon: <Music />,
    title: 'Music',
    subtitle: 'Major or Minor',
  },
  {
    id: 9,
    icon: <Academics />,
    title: 'Academics',
    subtitle: 'High Education Level',
  },
]

const CategoryArea = () => {
  return (
    <>
      <section className="category__area pt-120 pb-70">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
              <div className="section__title-wrapper mb-45">
                <h2 className="section__title">Explore <br />Our <span className="yellow-bg">Popular <img src="/assets/img/shape/yellow-bg-2.png" alt="" />  </span>Courses
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
              <div className="category__more mb-50 float-md-end fix">
                <Link to="/courses" className="link-btn">
                  View all Category
                  <i className="far fa-arrow-right"></i>
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {category_data.map(category => (
              <div key={category.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="category__item mb-30 transition-3 d-flex align-items-center">
                  <div className="category__icon mr-30">
                    {category.icon}
                  </div>
                  <div className="category__content">
                    <h4 className="category__title">
                      <Link to="/course-details">{category.title}</Link>
                    </h4>
                    <p>{category.subtitle}</p>
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

export default CategoryArea;