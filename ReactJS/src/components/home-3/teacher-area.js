import { Link } from "react-router-dom";
import { instructor } from "../../data";
import InstructorItem from "../common/instructor/instructor-item";


const teacher_content = {
  title: <>Our Most <br /> Popular</>,
  shape_text: 'Teachers',
  sm_text: "You don't have to struggle alone, you've got our assistance and help."
}


const TeacherArea = () => {
  return (
    <>
      <section className="teacher__area pt-115 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">{teacher_content.title} <span className="yellow-bg">
                  {teacher_content.shape_text} <img src="/assets/img/shape/yellow-bg-2.png" alt="" />
                </span> <br />
                </h2>
                <p>{teacher_content.sm_text}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {instructor.slice(0,3).map((teacher, i) => (
              <InstructorItem key={i} teacher={teacher} />
            ))}
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="teacher__more text-center mt-30">
                <Link to="/contact" className="e-btn e-btn-border e-btn-5">Become an Instructor</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherArea;