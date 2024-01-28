import { Books, Followers, Learners, Students } from "../../svg";
import Counter from "./count-up";


const counter_data = [
  {
    col: "col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 col-md-3 offset-md-0 col-sm-5 offset-sm-2",
    counter: (14263),
    icon: <Students />,
    icon_name: 'user',
    text: '',
    title: 'Students Enrolled',
  },
  {
    col: "col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-5",
    counter: (102),
    icon: <Books />,
    icon_name: 'book',
    pl: "counter__pl-80",
    text: '',
    title: 'Total Courses',
  },
  {
    col: "col-xxl-2 offset-xxl-0 col-xl-3 offset-xl-0 col-lg-3 offset-lg-0 col-md-3 offset-md-0 col-sm-5 offset-sm-2",
    counter: (983),
    icon: <Learners />,
    icon_name: 'graduate',
    pl: "counter__pl-34",
    text: '',
    title: 'Online Learners',
  },
  {
    col: "col-xxl-2 offset-xxl-1 col-xl-3 col-lg-3 col-md-3 col-sm-5",
    counter: (8),
    icon: <Followers />,
    icon_name: 'globe',
    text: 'K',
    title: 'Foreign Followers',
  },
]

const counter_content = {
  title:'We are',
  shape_text:'Proud',
  subtitle:"You don't have to struggle alone, you've got our assistance and help."
}

const CounterArea = () => {
  return (
    <>
      <section className="counter__area pt-145 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">{counter_content.title} <span className="yellow-bg yellow-bg-big">
                  {counter_content.shape_text}<img src="/assets/img/shape/yellow-bg.png" alt="" /></span></h2>
                <p>{counter_content.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {counter_data.map((counter, index) => (
              <div key={index} className={counter.col}>
                <div className={`counter__item ${counter.pl ? counter.pl : ''} mb-30`}>
                  <div className={`counter__icon ${counter.icon_name} mb-15`}>
                    {counter.icon}
                  </div>
                  <div className="counter__content">
                    <h4><span className="counter">
                      <Counter number={counter.counter} text={counter.text} /></span>
                    </h4>
                    <p>{counter.title}</p>
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

export default CounterArea;