import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CourseDetailsMain from '../components/course-details';

const CourseDetails = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Course Details'} />
      <CourseDetailsMain/>
    </Wrapper>
  );
};

export default CourseDetails;