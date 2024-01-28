import React from 'react';
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CourseListMain from '../components/course-list';

const CourseList = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Course List'} />
      <CourseListMain/>
    </Wrapper>
  );
};

export default CourseList;