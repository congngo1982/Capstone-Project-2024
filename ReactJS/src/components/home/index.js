import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Cta from '../common/cta/cta';
import BannerArea from '../common/banner-area';
import CategoryArea from './category-area';
import Courses from '../common/course/courses';
import EventArea from './event-area';
import HeroArea from './hero-area';
import Pricing from './pricing';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* hero start */}
      <HeroArea />
      {/* hero end */}

      {/* category start */}
      <CategoryArea />
      {/* category end */}

      {/* banner start */}
      <BannerArea />
      {/* banner end */}

      {/* course start */}
      <Courses />
      {/* course end */}

      {/* event start */}
      <EventArea />
      {/* event end */}

      {/* pricing start */}
      <Pricing />
      {/* pricing end */}

      {/* cta start */}
      <Cta />
      {/* cta end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default index;