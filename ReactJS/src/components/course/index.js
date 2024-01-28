import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AllCourses from '../common/course/all-courses';
import Cta from '../common/cta/cta';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'Courses'} subtitle={'Courses'} />
      {/* breadcrumb end */}

      {/* all courses start */}
      <AllCourses />
      {/* all courses end */}

      {/* cta start */}
      <Cta/>
      {/* cta end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </>
  );
};

export default index;