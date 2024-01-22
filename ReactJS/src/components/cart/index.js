import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CartInfo from './cart-info';
import Footer from '../../layout/footers/footer';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'My Cart'} subtitle={'Cart'} img="-2" />
      {/* breadcrumb end */}

      {/* cart info start */}
      <CartInfo />
      {/* cart info end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;