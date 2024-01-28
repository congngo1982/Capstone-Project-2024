import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';
import ContactInfo from './contact-info';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'Contact'} subtitle={'Contact'} />
      {/* breadcrumb end */}

      {/* contact area start */}
      <ContactArea />
      {/* contact area end */}

      {/* contact info start */}
      <ContactInfo />
      {/* contact info end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;