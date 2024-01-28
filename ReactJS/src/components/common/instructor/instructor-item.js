import { Link} from 'react-router-dom';

const InstructorItem = ({teacher}) => {
  return (
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
          <div className="teacher__thumb w-img fix">
            <Link to={`/instructor-details/${teacher.id}`}>
              <img src={teacher.img} alt="" />
            </Link>
          </div>
          <div className="teacher__content">
            <h3 className="teacher__title">
              <Link to={`/instructor-details/${teacher.id}`}>{teacher.name}</Link>
            </h3>
            <span>{' '} {teacher.title}</span>

            <div className="teacher__social">
              <ul>
                {teacher.social_links.map((link, index) => (
                  <li key={index}><a href="#"><i className={link}></i></a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default InstructorItem;