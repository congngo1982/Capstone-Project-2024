import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderTwo from '../../layout/headers/header-2';
import Courses from '../common/course/courses';
import CtaTwo from '../common/cta/cta-2';
import AboutArea from '../common/about/about-area';
import BlogArea from '../common/blog/blog-area';
import CounterArea from '../common/counter-area';
import HeroArea from './hero-area';
import Services from './services';
import TestimonialTwo from '../common/testimonials/testimonial-2';
import WhatArea from './what-area';
import WhyChose from '../common/why-chose';

const index = () => {
  return (
    <>
      {/* header two start */}
      <HeaderTwo />
      {/* header two end */}

      {/* hero area start */}
      <HeroArea />
      {/* hero area end */}

      {/* services area start */}
      <Services />
      {/* services area end */}

      {/* about area start */}
      <AboutArea />
      {/* about area end */}

      {/* course area start */}
      <Courses />
      {/* course area end */}

      {/* what area start */}
      <WhatArea />
      {/* what area end */}

      {/* why chose start */}
      <WhyChose />
      {/* why chose end */}

      {/* counter area start */}
      <CounterArea />
      {/* counter area end */}

      {/* testimonial start */}
      <TestimonialTwo />
      {/* testimonial end */}

      {/* blog area start */}
      <BlogArea />
      {/* blog area end */}

      {/* cta area start */}
      <CtaTwo />
      {/* cta area end */}

      {/* footer start */}
      <Footer gray_bg={true} />
      {/* footer end */}
    </>
  );
};

export default index;