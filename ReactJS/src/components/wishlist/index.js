import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import WishlistArea from './wishlist-area';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'My Wishlist'} subtitle={'Wishlist'} img="-2" />
      {/* breadcrumb end */}

      {/* wishlist area start */}
      <WishlistArea/>
      {/* wishlist area end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;