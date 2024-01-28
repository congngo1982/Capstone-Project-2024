import React from 'react';
import { instructor } from '../../data';
import InstructorItem from '../common/instructor/instructor-item';

const InstructorArea = () => {
  return (
    <>
      <section className="teacher__area pt-115 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">Our Most <br />
                  Popular <span className="yellow-bg"> Teachers
                    <img src="/assets/img/shape/yellow-bg-2.png" alt="" />  </span> <br />
                </h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {instructor.map((teacher, i) => (
              <InstructorItem key={i} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorArea;