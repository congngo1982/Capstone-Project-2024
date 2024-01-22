import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import BannerArea from '../common/banner-area';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import InstructorArea from './instructor-area';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'Instructor'} subtitle={'Instructor'} />
      {/* breadcrumb end */}

      {/* instructor area start */}
      <InstructorArea />
      {/* instructor area end */}

      {/* banner start */}
      <BannerArea padd="pb-80" />
      {/* banner end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;