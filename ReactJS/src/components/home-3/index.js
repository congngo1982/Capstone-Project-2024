import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-3';
import AboutArea from '../common/about/about-area';
import BlogArea from '../common/blog/blog-area';
import Brands from '../common/brand/brands';
import CtaThree from '../common/cta/cta-3';
import WhyChose from '../common/why-chose';
import CoursesThree from './courses-3';
import HeroSlider from './hero-slider';
import TeacherArea from './teacher-area';
import TestimonialThree from '../common/testimonials/testimonial-3';

const index = () => {
  return (
    <>
      {/* header three start */}
      <HeaderThree />
      {/* header three end */}

      {/* hero slider start */}
      <HeroSlider />
      {/* hero slider end */}

      {/* about area start */}
      <AboutArea padd="pt-120 pb-150" />
      {/* about area end */}

      {/* brands area start */}
      <Brands />
      {/* brands area end */}

      {/* course area start */}
      <CoursesThree />
      {/* course area end */}

      {/* teacher area start */}
      <TeacherArea />
      {/* teacher area end */}

      {/* cta area start */}
      <CtaThree />
      {/* cta area end */}

      {/* testimonial area start */}
      <TestimonialThree />
      {/* testimonial area end */}

      {/* why area start */}
      <WhyChose />
      {/* why area end */}

      {/* blog area start */}
      <BlogArea />
      {/* blog area end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default index;