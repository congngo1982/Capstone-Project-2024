import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import { selectCourses } from '../../redux/features/course-slice';
import CourseDetailsArea from '../common/course/course-details';
import Cta from '../common/cta/cta';

const Index = () => {
  const course = useSelector(selectCourses)[1];
  return (
    <>
      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* course details */}
      <CourseDetailsArea course={course} />
      {/* course details */}

      {/* cta start */}
      <Cta />
      {/* cta end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default Index;