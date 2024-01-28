import Header from '../../layout/headers/header';
import AboutArea from '../common/about/about-area';
import Brands from '../common/brand/brands';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import TestimonialThree from '../common/testimonials/testimonial-3';
import WhyChose from '../common/why-chose';
import CounterArea from '../common/counter-area';
import BannerArea from '../common/banner-area';
import Footer from '../../layout/footers/footer';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <Breadcrumb title={'About'} subtitle={'About'} img="-2" />
      {/* breadcrumb end */}

      {/* about area start */}
      <AboutArea padd='pt-120 pb-150' />
      {/* about area end */}

      {/* brands start */}
      <Brands />
      {/* brands end */}

      {/* testimonial start */}
      <TestimonialThree />
      {/* testimonial end */}

      {/* why chose start */}
      <WhyChose />
      {/* why chose end */}

      {/* counter area start */}
      <CounterArea />
      {/* counter area end */}

      {/* banner start */}
      <BannerArea />
      {/* banner end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;