import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import CoursesArea from './courses-area';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'Courses'} subtitle={'Courses'} />
      {/* breadcrumb end */}

      {/* courses start */}
      <CoursesArea/>
      {/* courses end */}

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