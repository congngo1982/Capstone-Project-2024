import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import SignUpArea from './sign-up-area';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* sign up area start */}
      <SignUpArea/>
      {/* sign up area end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;