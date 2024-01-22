import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CourseMain from '../components/course';

const Course = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Course'} />
      <CourseMain/>
    </Wrapper>
  );
};

export default Course;