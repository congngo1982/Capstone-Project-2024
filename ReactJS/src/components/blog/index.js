import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogItems from './blog-items';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'Blog Grid'} subtitle={'Blog Grid'} img="-2" />
      {/* breadcrumb end */}

      {/* blog items start */}
      <BlogItems/>
      {/* blog items end */}

      {/* footer start */}
      <Footer pt="pt-90" />
      {/* footer end */}
    </>
  );
};

export default index;