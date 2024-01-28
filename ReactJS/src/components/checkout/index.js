import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CheckoutArea from './checkout-area';
import CouponArea from './coupon-area';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */} 
      <Breadcrumb title={'Checkout'} subtitle={'Checkout'} img="-2" />
      {/* breadcrumb end */}

      {/* coupon start */}
      <CouponArea />
      {/* coupon end */}

      {/* checkout area start */}
      <CheckoutArea />
      {/* checkout area end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;