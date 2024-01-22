import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import SignInArea from './sign-in-area';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* sign in area start */}
      <SignInArea />
      {/* sign in area end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;